'use client'
import useSWR from 'swr';
import {Produto} from '@/models/interfaces'
import ProdutosCard from '@/components/ProdutosCard/ProdutosCard';
import Link from 'next/link';
import { useState, useEffect, use } from "react";
import ProdutosCartCard from '@/components/ProdutoCartCard/ProdutoCartCard';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function produtosPage() {

  const [carrinhoTotal, atualizarTotal] = useState<number>(0)
  const [pesquisa, pesquisar] = useState("")
  const [produtosFiltados, filtrar] = useState<Produto[]>([])
  const [ordem, ordenar] = useState("")
  const [carrinho, atualizarCarrinho] = useState<Produto[]>([])
  const [estudante, eEstudante] = useState(false)
  const [copao, colocaCopao] = useState('')

  const {data, error, isLoading} = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products/', fetcher);




  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    atualizarTotal(Number(carrinho.reduce((acc, p) => acc + Number(p.price), 0)))
  }, [carrinho, carrinhoTotal])
  
  useEffect(() => {
    const localCarrinho = localStorage.getItem('carrinho') || '[]'
    const localTotal = localStorage.getItem('carrinhoTotal') || 0
    atualizarCarrinho(JSON.parse(localCarrinho))
    atualizarTotal(Number(localTotal))
  }, [])
  
  useEffect(() => {
    if (data == null) {
      return;
    }
    const posFiltro = data.filter(produto => 
      produto.title.toLowerCase().includes(pesquisa.toLowerCase())
    )

    switch(ordem) {
      case "nome": {
        posFiltro.sort((a, b) => a.title.localeCompare(b.title))
        break
      }
      case "maiorMenor": {
        posFiltro.sort((a, b) => b.price - a.price)
        break
      }
      case "menorMaior": {
        posFiltro.sort((a, b) => a.price - b.price)
        break
      }
    }
    

    filtrar(posFiltro)
  }, [pesquisa, data, ordem])





  if (error) return <p>Erro ao carregar</p>;

  if (isLoading) return <p>Carregando...</p>;

  if (!data) return <p>Nenhum produto encontrado</p>;






  function addProduto(produto: Produto) {
    atualizarCarrinho((prev) => 
      [...prev, produto]
    )
  }

  function removeProduto(index: number) {
    atualizarCarrinho((prev) =>
      prev.filter((_, i) => i != index)
    )
  }

  function comprar() {
      fetch('https://deisishop.pythonanywhere.com/buy', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          products: carrinho.map(product => product.id),
          student: estudante,
          coupon: copao,
          name: ""
        })
      })
      .then(response => {
          if (!response.ok) {
              return response.json().then(err => {
                  throw err
              })
          }
          return response.json()
      })
     .then((response) => {
         console.log(response)
       atualizarCarrinho([])
         alert("Compra realizada com sucesso!")
    })
    .catch((err) => {
        console.error("Erro ao comprar:", err)
        alert(err.message || "Erro ao comprar")
    })
  }

  return (
    <>
      <h1>DeisiShop</h1>
      <input 
        className='bg-gray-300 p-3 m-3 rounded-2xl'
        type='text'
        placeholder='pesquisar produto'
        value={pesquisa}
        onChange={(e) => pesquisar(e.target.value)}
      />
      <select
        className='bg-gray-300 p-3 m-3 rounded-2xl'
        value={ordem}
        onChange={(e) => ordenar(e.target.value)}
      >
        <option value="">Selecionar</option>
        <option value="nome">Ordem Alfabética</option>
        <option value="maiorMenor">Preço: Maior para Menor</option>
        <option value="menorMaior">Preço: Menor para Maior</option>
      </select>
      <Link href={"deisishop/categorias"} className='bg-gray-300 p-3 m-3 rounded-2xl'>Categorias</Link>
      <ul className='flex flex-wrap gap-4 max-w-[1000px] mx-auto p-4'>
        {produtosFiltados.map(produto => {
          return <ProdutosCard
            id={produto.id}
            title={produto.title}
            preco={produto.price}
            image={produto.image}
            link="deisishop"
            addProduto={() => addProduto(produto)}
          />
        })}
      </ul>
      <div className='gap-4 max-w-[1000px] rounded-2xl mx-auto p-4 bg-gray-300'>
        <h2>Carrinho</h2>
        <ul>
          {carrinho.map((produto, i) => {
            return <ProdutosCartCard 
              id={produto.id}
              title={produto.title}
              preco={produto.price}
              removeProduto={() => removeProduto(i)}
            />
          })}
        </ul>
        
        <p>Total: {carrinhoTotal.toFixed(2)}€</p>
        <label>
          És estudante?
          <input 
            type="checkbox"
            checked={estudante}
            onChange={(e) => eEstudante(e.target.checked)}
          />
        </label>
        <input
          className='bg-gray-400 p-3 m-3 rounded-2xl'
          type="text"
          placeholder="Cupão de desconto"
          value={copao}
          onChange={(e) => colocaCopao(e.target.value)}
        />
        <button
          className='bg-gray-400 p-3 m-3 rounded-2xl'
          onClick={() => comprar()}
        >
          Comprar
        </button>
        
      </div>
    </>
  )
}