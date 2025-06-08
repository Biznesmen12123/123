"use client"

import { useState, useEffect } from "react"
import { MessageCircle, Gift, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function StitchMystery() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([])
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
      }
      setHearts((prev) => [...prev, newHeart])

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id))
      }, 3000)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce text-pink-400 text-2xl pointer-events-none"
          style={{
            left: heart.x,
            top: heart.y,
            animation: "float-up 3s ease-out forwards",
          }}
        >
          💙
        </div>
      ))}

      {/* Floating white stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-star ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${10 + Math.random() * 10}px`,
            }}
          >
            ⭐
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Хочу Стіча! 🥺
          </h1>
          <div className="flex justify-center items-center gap-2 text-2xl">
            <Sparkles className="text-pink-500" />
            <span className="text-white font-bold">дуже-дуже хочу</span>
            <Sparkles className="text-blue-500" />
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 overflow-hidden shadow-2xl border-4 border-gradient-to-r from-pink-300 to-blue-300">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src="/girl-with-stitch.png"
                  alt="Пічонка зі Стічем"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h2 className="text-3xl font-bold mb-2">Хто подарує мені такого? 🥺</h2>
                  <p className="text-lg opacity-90">Дивлюся на цього милашку і мрію... може хтось подарує? 👉👈</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mystery section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src="/stitch-plush.png"
                    alt="Стіч іграшка"
                    width={200}
                    height={200}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold text-pink-600 mb-3">Мєчта моя 💙</h3>
                <p className="text-gray-700">Такий мілі Стіч! Дуже хочу такого собі. Хто подарує? 🥺</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
              <CardContent className="p-6 text-center">
                <Gift className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-600 mb-3">Хто подарує? 🎁</h3>
                <p className="text-gray-700 mb-4">Може є хтось добрий, хто захоче зробити мені приємно? 👉👈</p>
                <Button
                  onClick={() => setShowMessage(!showMessage)}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600"
                >
                  Подаруєш? 🥺
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Hidden message */}
          {showMessage && (
            <Card className="mb-8 bg-gradient-to-r from-purple-100 to-pink-100 border-purple-200 shadow-xl animate-pulse">
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-purple-600 mb-4">Будь ласка? 🥺👉👈</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Якщо хочеш зробити мені приємно і подарувати Стіча - пиши! Буду дуже вдячна 💕
                </p>
                <div className="text-2xl font-bold text-purple-600">Чекаю... 🙏</div>
              </CardContent>
            </Card>
          )}

          {/* Contact section */}
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Напиши мені! 💌</h3>
              <p className="text-xl mb-6">Хочеш подарувати Стіча 😊</p>
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-xl px-8 py-4">
                <a href="https://t.me/mixxzet" target="_blank" rel="noopener noreferrer">
                  @mixxzet 💬
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
        
        @keyframes float-star {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
