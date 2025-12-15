'use client'
import useSWR from 'swr';
import {Produto} from '@/models/interfaces'
import ProdutosCard from '@/components/ProdutosCard/ProdutosCard';
import { useState, useEffect, use } from "react";

const fetcher = (url: string) => fetch(url).then(res => res.json());

interface CategoriaProps {
  title: string;
}

export default function ProdutosCategoriaCard({title}: CategoriaProps) {
  const [carrinho, atualizarCarrinho] = useState<Produto[]>([])
  const [carrinhoTotal, atualizarTotal] = useState<number>(0)

  const {data, error, isLoading} = useSWR<Produto[]>('https://deisishop.pythonanywhere.com/products/', fetcher);


  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
    atualizarTotal(Number(carrinho.reduce((acc, p) => acc + Number(p.price), 0)))
  }, [carrinho, carrinhoTotal])
  
  useEffect(() => {
    const localCarrinho = localStorage.getItem('carrinho') || '[]'
    const localTotal = localStorage.getItem('carrinhoTotal') || 0
    atualizarCarrinho(JSON.parse(localCarrinho))
  }, [])

  if (error) return <p>Erro ao carregar</p>;

  if (isLoading) return <p>Carregando...</p>;

  if (!data) return <p>Nenhum produto encontrado</p>;


  function addProduto(produto: Produto) {
    atualizarCarrinho((prev) => 
      [...prev, produto]
    )
  }

  return (
    <>
        <h1>{title}</h1>
        <ul>
            {data.map(produto => {
                if (produto.category === title) {
                  return <ProdutosCard
                      id={produto.id}
                      title={produto.title}
                      preco={produto.price}
                      image={produto.image}
                      link={`deisishop/categorias/${title}`}
                      addProduto={() => addProduto(produto)}
                  />
                }
            })}
        </ul>
    </>
  )
}
