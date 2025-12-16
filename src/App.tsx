import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { TrendingUp, Code, Wallet, ExternalLink } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Background mesh pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Octagonal mesh overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/mesh.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-4">
            <img
              src="/kryptix.png"
              alt="Kryptix Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">Kryptix GmbH</h1>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400">
              Automated Trading & Blockchain Development
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Specializing in yield farming, DeFi strategies, and grant-based
              consulting for blockchain foundations
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="mailto:contact@kryptix.app" className="cursor-pointer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white cursor-pointer"
                >
                  Contact
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-900/50 border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Automated Trading
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Advanced yield farming strategies and DeFi protocol
                  optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Leveraging cutting-edge algorithms for optimal returns in
                  decentralized finance protocols
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-teal-500/20 backdrop-blur-sm hover:border-teal-500/40 transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-teal-600 to-green-600 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Blockchain Development
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Custom software solutions for blockchain projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Expert development services tailored to blockchain and Web3
                  ecosystems
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-emerald-500/20 backdrop-blur-sm hover:border-emerald-500/40 transition-all">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white text-xl">
                  Grant Consulting
                </CardTitle>
                <CardDescription className="text-slate-400">
                  Strategic consulting for blockchain foundations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-sm">
                  Navigate grant programs and funding opportunities in the
                  blockchain space
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-12 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Kryptix GmbH</h3>
                <p className="text-slate-400 text-sm mb-2">Kolpingring 2</p>
                <p className="text-slate-400 text-sm mb-2">82041 Oberhaching</p>
                <p className="text-slate-400 text-sm">Sitz Oberhaching</p>
              </div>
              <div className="md:text-right">
                <h3 className="text-white font-semibold mb-4">
                  Legal Information
                </h3>
                <p className="text-slate-400 text-sm mb-2">
                  Amtsgericht München
                </p>
                <p className="text-slate-400 text-sm mb-2">HRB 277150</p>
                <p className="text-slate-400 text-sm mb-2">
                  Ust-IdNr: DE354967341
                </p>
                <p className="text-slate-400 text-sm">
                  Geschäftsführer: Philipp Mager
                </p>
              </div>
            </div>
            <div className="pt-8 border-t border-emerald-500/10">
              <p className="text-slate-500 text-sm text-center">
                © {new Date().getFullYear()} Kryptix GmbH. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
