import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  Search, 
  Plus, 
  User, 
  Clock, 
  TrendingUp, 
  Shield, 
  Briefcase,
  ChevronDown,
  Star,
  BarChart3,
  Users,
  Zap,
  Target
} from 'lucide-react'
import './App.css'

// Import des images
import heroImage from './assets/Qnw5C3lLpkxz.jpeg'
import aiTechImage from './assets/lWr9itbVwRJe.webp'
import timeIcon from './assets/3xn4D8F0lr9x.jpg'
import careerIcon from './assets/NiAUqvYoZVlk.jpg'
import securityIcon from './assets/R7c4XJxVc30P.png'
import teamImage from './assets/JiWAmIHqLFwv.jpg'
import statsImage from './assets/28El3LzcQWox.png'
import testimonial1 from './assets/OtGjjpX0782B.webp'
import testimonial2 from './assets/d9ISeT4Jp1y3.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Gain de temps",
      description: "Automatisez vos tâches répétitives et concentrez-vous sur l'essentiel. L'IA peut vous faire gagner jusqu'à 40% de votre temps de travail.",
      image: timeIcon
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Compétitivité sur le marché",
      description: "Restez à la pointe de votre secteur. Les professionnels formés à l'IA sont 3x plus susceptibles d'obtenir une promotion.",
      image: careerIcon
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Sécurité et confidentialité",
      description: "Maîtrisez les enjeux de sécurité des données et protégez votre entreprise contre les risques liés à l'IA.",
      image: securityIcon
    },
    {
      icon: <Briefcase className="w-8 h-8 text-orange-600" />,
      title: "Nouvelles opportunités",
      description: "Ouvrez-vous de nouveaux horizons professionnels. 85% des métiers de 2030 n'existent pas encore aujourd'hui.",
      image: careerIcon
    }
  ]

  const stats = [
    { label: "Adoption de l'IA en entreprise", value: "73%", trend: "+15% cette année", color: "text-blue-600" },
    { label: "Gain de productivité moyen", value: "+50%", trend: "Pour les early adopters", color: "text-green-600" },
    { label: "Tâches automatisables", value: "80%", trend: "D'ici 5 ans", color: "text-purple-600" },
    { label: "Nouveaux emplois créés", value: "97M", trend: "Grâce à l'IA d'ici 2025", color: "text-orange-600" }
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Directrice Marketing",
      company: "TechCorp",
      content: "Grâce à la formation IA, j'ai pu automatiser 60% de mes tâches répétitives et me concentrer sur la stratégie. Mon équipe est maintenant 3x plus efficace.",
      image: testimonial1,
      rating: 5
    },
    {
      name: "Pierre Martin",
      role: "Consultant RH",
      company: "Innovate Solutions",
      content: "L'IA a révolutionné ma façon de travailler. Je peux maintenant analyser des milliers de CV en quelques minutes et identifier les meilleurs candidats.",
      image: testimonial2,
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FormationIA
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#accueil" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Accueil
                </a>
                <a href="#statistiques" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Statistiques
                </a>
                <a href="#temoignages" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Témoignages
                </a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="w-4 h-4 mr-2" />
                Nouveau projet
              </Button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4" />
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  🚀 Révolution IA en cours
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  L'IA transforme déjà{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    tous les métiers
                  </span>
                  . Êtes-vous prêt·e ?
                </h1>
                <div className="space-y-3 text-lg text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span><strong>80%</strong> des tâches répétitives seront automatisées d'ici 5 ans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span><strong>+50%</strong> de productivité pour les entreprises qui adoptent l'IA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span><strong>97M</strong> nouveaux emplois créés grâce à l'IA d'ici 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={() => window.open('https://calendar.app.google/aRPgontveB5NCa359', '_blank')}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Prendre rendez-vous
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
                  onClick={() => window.open('https://jayd.ai', '_blank')}
                >
                  Découvrir Jaydai
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
              <img 
                src={heroImage} 
                alt="Intelligence Artificielle" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi se former à l'IA maintenant ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les 4 bénéfices concrets qui transformeront votre carrière professionnelle
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:from-blue-50 group-hover:to-purple-50 transition-colors">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="statistiques" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              L'IA en chiffres
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des données récentes qui montrent l'urgence de se former
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className={`text-4xl lg:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-semibold mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.trend}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <img 
              src={statsImage} 
              alt="Visualisation des données IA" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="temoignages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils ont transformé leur carrière
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos formations ont révolutionné leur quotidien professionnel
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-shadow">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt·e à transformer votre carrière ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ne laissez pas l'IA vous dépasser. Rejoignez les milliers de professionnels qui ont déjà pris une longueur d'avance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://calendar.app.google/aRPgontveB5NCa359', '_blank')}
            >
              <Target className="w-5 h-5 mr-2" />
              Réservez un rendez-vous
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://jayd.ai', '_blank')}
            >
              Essayez Jaydai
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="ml-2 text-xl font-bold">FormationIA</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire pour maîtriser l'intelligence artificielle et transformer votre carrière professionnelle.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Liens rapides</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
                <li><a href="#statistiques" className="hover:text-white transition-colors">Statistiques</a></li>
                <li><a href="#temoignages" className="hover:text-white transition-colors">Témoignages</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📧 contact@formation-ia.fr</p>
                <p>📞 +33 1 23 45 67 89</p>
                <p>📍 Paris, France</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FormationIA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

