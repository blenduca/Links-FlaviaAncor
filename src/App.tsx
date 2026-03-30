import React from 'react';

// Profile photo
import imgFlaviaPerez from "figma:asset/e56def0fdc65116ef0006dcdd4755b8fb2d63406.png";

// --- Correção da associação das imagens ---
// As variáveis originais estavam trocadas. Agora apontam para o visual correto:

// Imagem do Livro Best Seller
import imgLivro from "figma:asset/b73920c4cc1862d01f6181d29e3c301310a74bbc.png";

// Imagens Palestras (3 imagens)
import imgPalestras from "figma:asset/8efdf68e9affd777fb1f455c7e2ff6873974dbed.png";
import imgPalestras1 from "figma:asset/149fd348d6ad1d9cfeee05209393b3c290234ad5.png";
import imgPalestras2 from "figma:asset/17fc4b8ee0921774cb2adaaf9991a672bbd6de32.png";

// Imagens Diagnóstico (2 imagens)
import imgDiagnosticoAncor from "figma:asset/5785742a826a290c4d6a44a1faa94e0653a7787c.png";
import imgDiagnosticoAncor1 from "figma:asset/c749228b0ff391c90f3ff81ae48965e50b4f1cf6.png";

// Imagem Ancor Academy
import imgAncorAcademy from "figma:asset/5b5b0054dbe9ee02d2a7ff1e8432fbd847bfdc8a.png";

// Imagens O Curso (2 imagens)
import imgCurso from "figma:asset/5b2e4b3c5e0262156e92b83553c429a3951e9941.png";
import imgCurso1 from "figma:asset/a1304d1d2901752557556b3cb7182096fac86349.png";

// Imagem LinkedIn
import imgLinkedIn from "figma:asset/8eae791ff7c5d05a2a295075eefe0fa85520f052.png";

// Imagem WhatsApp
import imgWhatsApp from "figma:asset/dacd62e70baedfa6f64654fd61d1ad7449498872.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#F1F1F1] flex flex-col items-center pt-12 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[672px] flex flex-col gap-8">

        {/* Profile/Header Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-[160px] h-[160px] rounded-full relative shrink-0">
            <img
              src={imgFlaviaPerez}
              alt="Flavia Perez"
              className="w-full h-full rounded-full object-cover"
            />
            <div className="absolute inset-0 rounded-full border-[3.594px] border-white shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[30px] tracking-[0.4px] text-[#101828] text-center">Flavia Perez</h1>
            <p className="text-[#4a5565] text-[14px] leading-[22.75px] tracking-[-0.15px] text-center max-w-[479px] mx-auto">
              Longevidade Profissional para Executivos | Gestão Estratégica de Ciclos de Carreira | Autora best-seller, Colunista &
              Palestrante | Cocriadora do Método ANCOR | Sócia-fundadora da Ancor Consultoria
            </p>
          </div>
        </div>

        {/* 1. Banner: Ancor Academy */}
        <a
          href="https://ancoracademy.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src={imgAncorAcademy} alt="Ancor Academy" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

        {/* 2. Banner: Diagnóstico Ancor */}
        <a
          href="https://diagnostico.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src={imgDiagnosticoAncor} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
            <img src={imgDiagnosticoAncor1} alt="Diagnóstico Ancor" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

        {/* 3. Banner: Curso A Primeira Segunda-Feira */}
        <a
          href="https://ocurso.ancorcarreira.com.br/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src={imgCurso} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
            <img src={imgCurso1} alt="Curso A Primeira Segunda-Feira" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

        {/* 4. Banner: Livro A Primeira Segunda-Feira */}
        <a
          href="https://amzn.to/4qS6vEp"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src={imgLivro} alt="Livro A Primeira Segunda-Feira" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

        {/* 5. Banner: Palestras e Programas In Company */}
        <a
          href="mailto:contato@ancorconsultoria.com.br"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src={imgPalestras} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
            <img src={imgPalestras1} alt="" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
            <img src={imgPalestras2} alt="Palestras e Programas In Company" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

        {/* 7. Banner: Flavia no LinkedIn */}
        <a
          href="https://www.linkedin.com/in/flavia-perez/"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Instagram%20Flavia-usL1BtApChLNzHpOmaZMTBgRuHZUjW.png" alt="Flavia no LinkedIn" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

        {/* 8. Banner: Contato via WhatsApp */}
        <a
          href="http://wa.me/5511999051956"
          className="block w-full rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] hover:shadow-md overflow-hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative w-full" style={{ paddingBottom: '37.12%' }}>
            <img src={imgWhatsApp} alt="Contato via WhatsApp" className="absolute inset-0 w-full h-full object-cover rounded-[32px]" />
          </div>
        </a>

      </div>
    </div>
  );
}
