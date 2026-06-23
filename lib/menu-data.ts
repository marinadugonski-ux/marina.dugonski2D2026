export type MenuItem = {
  id: string
  nome: string
  descricao: string
  preco: number
  imagem: string
  estrela?: boolean
}

export type MenuCategory = {
  id: string
  nome: string
  icone: string
  itens: MenuItem[]
}

export const menu: MenuCategory[] = [
  {
    id: "doces",
    nome: "Doces",
    icone: "cake",
    itens: [
      {
        id: "taca-supreme",
        nome: "Taça Supreme de Morango",
        descricao:
          "Camadas de brownie artesanal, creme de ninho trufado, morangos frescos e cobertura de chocolate rosa.",
        preco: 28.9,
        imagem: "/taca-morango.png",
        estrela: true,
      },
      {
        id: "red-velvet",
        nome: "Slice Cake de Red Velvet",
        descricao: "Fatia de bolo aveludado com recheio leve de cream cheese e toque de baunilha.",
        preco: 18.0,
        imagem: "/red-velvet.png",
      },
    ],
  },
  {
    id: "cafes",
    nome: "Cafés",
    icone: "coffee",
    itens: [
      {
        id: "pink-latte",
        nome: "Pink Latte",
        descricao:
          "Expresso extraído na hora com leite vaporizado e uma sutil infusão natural de frutas vermelhas.",
        preco: 14.5,
        imagem: "/pink-latte.png",
      },
      {
        id: "cappuccino",
        nome: "Cappuccino Tradicional",
        descricao: "Café expresso, leite cremoso e uma leve camada de cacau em pó polvilhado.",
        preco: 11.0,
        imagem: "/cappuccino.png",
      },
    ],
  },
  {
    id: "salgados",
    nome: "Salgados",
    icone: "sandwich",
    itens: [
      {
        id: "croissant",
        nome: "Croissant de Presunto e Queijo",
        descricao: "Massa folhada amanteigada e crocante, recheada com presunto e queijo derretido.",
        preco: 16.5,
        imagem: "/croissant.png",
      },
      {
        id: "quiche",
        nome: "Quiche de Alho-Poró",
        descricao: "Torta salgada de massa quebradiça com recheio cremoso de alho-poró e queijo.",
        preco: 19.9,
        imagem: "/quiche.png",
      },
    ],
  },
  {
    id: "bebidas",
    nome: "Bebidas Geladas",
    icone: "cup",
    itens: [
      {
        id: "limonada-rosa",
        nome: "Limonada Rosa",
        descricao: "Limonada refrescante com toque de morango, servida bem gelada com gelo.",
        preco: 12.0,
        imagem: "/limonada-rosa.png",
        estrela: true,
      },
      {
        id: "milkshake",
        nome: "Milkshake de Morango",
        descricao: "Cremoso milkshake de morango coberto com chantilly e morango fresco.",
        preco: 17.5,
        imagem: "/milkshake.png",
      },
    ],
  },
]

export function formatarPreco(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
}
