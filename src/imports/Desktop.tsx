import imgImageFlaviaPerez from "figma:asset/e56def0fdc65116ef0006dcdd4755b8fb2d63406.png";
import imgImageLivroAPrimeiraSegundaFeira from "figma:asset/5b5b0054dbe9ee02d2a7ff1e8432fbd847bfdc8a.png";
import imgImageCursoAPrimeiraSegundaFeira from "figma:asset/5785742a826a290c4d6a44a1faa94e0653a7787c.png";
import imgImageCursoAPrimeiraSegundaFeira1 from "figma:asset/c749228b0ff391c90f3ff81ae48965e50b4f1cf6.png";
import imgImageWorkshopDoTopoAoProximoCiclo from "figma:asset/5b2e4b3c5e0262156e92b83553c429a3951e9941.png";
import imgImageWorkshopDoTopoAoProximoCiclo1 from "figma:asset/a1304d1d2901752557556b3cb7182096fac86349.png";
import imgImageAncorAcademy from "figma:asset/b73920c4cc1862d01f6181d29e3c301310a74bbc.png";
import imgImageDiagnosticoAncor from "figma:asset/8efdf68e9affd777fb1f455c7e2ff6873974dbed.png";
import imgImageDiagnosticoAncor1 from "figma:asset/149fd348d6ad1d9cfeee05209393b3c290234ad5.png";
import imgImageDiagnosticoAncor2 from "figma:asset/17fc4b8ee0921774cb2adaaf9991a672bbd6de32.png";
import imgImagePalestras from "figma:asset/ba5819ef27eb4672cb37709313675fe72661e7ad.png";
import imgImagePalestras1 from "figma:asset/f6d349d24dd0e898a4052f62059589f943602f9c.png";
import imgImageFlaviaNoLinkedIn from "figma:asset/8eae791ff7c5d05a2a295075eefe0fa85520f052.png";
import imgImageContatoViaWhatsApp from "figma:asset/dacd62e70baedfa6f64654fd61d1ad7449498872.png";

function ImageFlaviaPerez() {
  return (
    <div className="pointer-events-none relative rounded-[24118800px] shrink-0 size-[160px]" data-name="Image (Flavia Perez)">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[24118800px]">
        <div className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 rounded-[24118800px]" />
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid max-w-none object-cover rounded-[24118800px] size-full" src={imgImageFlaviaPerez} />
      </div>
      <div aria-hidden="true" className="absolute border-[3.594px] border-solid border-white inset-0 rounded-[24118800px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[35.996px] items-start relative shrink-0 w-full" data-name="Heading 1">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#101828] text-[30px] text-center tracking-[0.3955px] whitespace-pre-wrap">Flavia Perez</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[68.263px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-[256.32px] not-italic text-[#4a5565] text-[14px] text-center top-[0.88px] tracking-[-0.1504px] w-[479px] whitespace-pre-wrap">{`Gestão de Carreira e Pós-Carreira para Executivos | Especialista em Longevidade Profissional | Colunista & Palestrante | Cocriadora do Método ANCOR | Sócia-fundadora da Ancor Consultoria`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[116.254px] relative shrink-0 w-[511.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11.995px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[15.993px] h-[292.247px] items-center relative shrink-0 w-[671.997px]" data-name="Container">
      <ImageFlaviaPerez />
      <Container3 />
    </div>
  );
}

function ImageLivroAPrimeiraSegundaFeira() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Livro A Primeira Segunda-Feira)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImageLivroAPrimeiraSegundaFeira} />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageLivroAPrimeiraSegundaFeira />
    </div>
  );
}

function ImageCursoAPrimeiraSegundaFeira() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Curso A Primeira Segunda-Feira)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageCursoAPrimeiraSegundaFeira} />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageCursoAPrimeiraSegundaFeira1} />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageCursoAPrimeiraSegundaFeira />
    </div>
  );
}

function ImageWorkshopDoTopoAoProximoCiclo() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Workshop Do Topo ao Próximo Ciclo)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageWorkshopDoTopoAoProximoCiclo} />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageWorkshopDoTopoAoProximoCiclo1} />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageWorkshopDoTopoAoProximoCiclo />
    </div>
  );
}

function ImageAncorAcademy() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Ancor Academy)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImageAncorAcademy} />
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageAncorAcademy />
    </div>
  );
}

function ImageDiagnosticoAncor() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Diagnóstico Ancor)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageDiagnosticoAncor} />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageDiagnosticoAncor1} />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImageDiagnosticoAncor2} />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageDiagnosticoAncor />
    </div>
  );
}

function ImagePalestras() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Palestras)">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImagePalestras} />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgImagePalestras1} />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImagePalestras />
    </div>
  );
}

function ImageFlaviaNoLinkedIn() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Flavia no LinkedIn)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImageFlaviaNoLinkedIn} />
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageFlaviaNoLinkedIn />
    </div>
  );
}

function ImageContatoViaWhatsApp() {
  return (
    <div className="h-[249.423px] relative rounded-[32px] shrink-0 w-full" data-name="Image (Contato via WhatsApp)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgImageContatoViaWhatsApp} />
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[249.423px] items-start relative rounded-[32px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] shrink-0 w-[671.997px]" data-name="Link">
      <ImageContatoViaWhatsApp />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start relative">
        <Container2 />
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2921px] items-center left-0 pb-[95.993px] pt-[47.991px] right-0 top-0" data-name="Container">
      <Container1 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f1f1f1] h-[3301.524px] relative shrink-0 w-full" data-name="App">
      <Container />
    </div>
  );
}

function LinksBannersFlavia() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-[0_0_-2221px_0] items-center" data-name="Links Banners Flavia">
      <App />
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <LinksBannersFlavia />
    </div>
  );
}