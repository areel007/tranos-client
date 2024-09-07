// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/Header";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { WhoWeAre } from "./pages/about/who-we-are";
import { Leadership } from "./pages/about/leadership";
import { SingleLeader } from "./pages/about/single-leader";
import { PowerProtection } from "./pages/products/power-protection";
import { TranosEliteRange } from "./pages/products/power-protection/tranos-elite-range";
import { SiemensSivacon } from "./pages/products/power-protection/siemens-sivacon";
import { ATEXPowerPanels } from "./pages/products/power-protection/atex-power-panels";
import { Simoprime } from "./pages/products/power-protection/simoprime";
import { Simosec } from "./pages/products/power-protection/simosec";
import { CableManagement } from "./pages/products/cable-management";
import { CableTrac } from "./pages/products/cable-management/cable-trac";
import { Ellis } from "./pages/products/cable-management/ellis";
import { Eris } from "./pages/products/cable-management/eris";
import { CableGlands } from "./pages/products/cable-management/cable-glands";
import { SingleCableGland } from "./pages/products/cable-management/cable-glands/single-cable-gland";
import { Enclosures } from "./pages/products/enclosures";
import { ElectricalEnclosures } from "./pages/products/enclosures/electrical-enclosures";
import { MechanicalEnclosures } from "./pages/products/enclosures/mechanical-enclosures";
import { Servers } from "./pages/products/enclosures/servers";
import { BatteryCabinets } from "./pages/products/enclosures/battery-cabinets";
import { HeavyDuty } from "./pages/products/enclosures/heavy-duty";
import { Customised } from "./pages/products/enclosures/customised";
import { ATEXJunctionBoxes } from "./pages/products/enclosures/atex-junction-boxes";
import { MeterBoxes } from "./pages/products/enclosures/meter-boxes";
import { Warehouse } from "./pages/products/warehouse";
import { Gaskets } from "./pages/products/gaskets";
import { SpiralWound } from "./pages/products/gaskets/spiral-wound-gaskets";
import { SoftCutGaskets } from "./pages/products/gaskets/soft-cut-gaskets";
import { Kammprofile } from "./pages/products/gaskets/kammprofile";
import { PowerGeneration } from "./pages/products/power-generation";
import { GasPoweredGenerators } from "./pages/products/power-generation/gas-powered-generators";
import { Lights } from "./pages/products/lights";
import { Lighting } from "./pages/products/lights/residential";
import { Duro } from "./pages/products/lights/residential/light/duro";
import { Valor } from "./pages/products/lights/residential/light/valor";
import { SimonV8 } from "./pages/products/lights/residential/switches-and-sockets/simon-v8";
import { SwitchesAndSockets } from "./pages/products/lights/residential/switches-and-sockets";
import { SimonE6 } from "./pages/products/lights/residential/switches-and-sockets/simon-e6";
import { SimonE3 } from "./pages/products/lights/residential/switches-and-sockets/simon-e3";
import { IndustrialWiring } from "./pages/products/lights/industrial/wiring";
import { IndustrialLighting } from "./pages/products/lights/industrial/lighting";
import { PowerAndEnergy } from "./pages/industries-we-serve/power-and-energy";
import { OilAndGas } from "./pages/industries-we-serve/oil-and-gas";
import { ResidentialAndCommercial } from "./pages/industries-we-serve/residential-and-commercial";
import { IndustrialAndManufacturing } from "./pages/industries-we-serve/industrial-and-manufacturing";
import { Telecommunications } from "./pages/industries-we-serve/Telecommunications";
import { CaseStudies } from "./pages/case-studies";
import { CaseStudy } from "./pages/case-studies/case-study";
import { CaseStudyPowerAndEnergy } from "./pages/case-studies/power-and-energy";
import { CaseStudiesOilAndGas } from "./pages/case-studies/oil-and-gas";
import { CaseStudiesAviation } from "./pages/case-studies/aviation";
import { CaseStudiesIndustrialAndManufacturing } from "./pages/case-studies/industrial-and-manufacturing";
import { CaseStudiesTelecommunications } from "./pages/case-studies/telecommunications";
import { Services } from "./pages/services";
import { Careers } from "./pages/careers";
import { Contacts } from "./pages/contacts";
import { NewsAndInsights } from "./pages/news-and-insights";
import { SingleNewsAndInsight } from "./pages/news-and-insights/single-news";
import { CMSNewsAndInsights } from "./pages/layouts/news-and-insights";
import { CMS } from "./pages/cms";
import { CMSSignIn } from "./pages/cms/sign-in";
import { AuthProvider } from "./contexts/authContext";
import { ProtectedRoute } from "./pages/layouts/protected";
import { CMSCaseStudies } from "./pages/layouts/case-studies";
import { CMSHome } from "./pages/layouts/home";
import { CMSAbout } from "./pages/layouts/about";
import { CMSServices } from "./pages/layouts/services";
import { CMSProducts } from "./pages/layouts/products";
import { CMSSettings } from "./pages/layouts/settings";

type TSubmenu = {
  menu: string;
  to: string;
};

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  const [isMobileMenuOut, setMobileMenuOut] = useState(false);
  const [step, setStep] = useState(1);
  const [submenu, setSubmenu] = useState<TSubmenu[] | null>(null);

  const openMobileMenu = () => {
    setMobileMenuOut(true);
  };

  const closeMobileMenu = () => {
    setMobileMenuOut(false);
    setStep(1);
  };

  const chooseStep = (_: React.MouseEvent<HTMLSpanElement, MouseEvent>, submenu: TSubmenu[] | null) => {
    setStep(2);
    setSubmenu(submenu);
  };

  const location = useLocation();
  const shouldShowHeader = !location.pathname.startsWith('/cms');

  return (
    <>
      {shouldShowHeader && (
        <>
          <Header isMobileMenuOut={isMobileMenuOut} openMobileMenu={openMobileMenu} closeMobileMenu={closeMobileMenu} />
          <MobileMenu isMobileMenuOut={isMobileMenuOut} chooseStep={chooseStep} step={step} submenu={submenu} closeMobileMenu={closeMobileMenu} />
        </>
      )}
      {children}
      {shouldShowHeader && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* about */}
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/leadership/:name" element={<SingleLeader />} />

            {/* products - power protect & distribution */}
            <Route path="/products/power-protection-and-distribution" element={<PowerProtection />} />
            <Route path="/products/power-protection-and-distribution/tranos-elite-range" element={<TranosEliteRange />} />
            <Route path="/products/power-protection-and-distribution/siemens-sivacon" element={<SiemensSivacon />} />
            <Route path="/products/power-protection-and-distribution/atex-power-panels" element={<ATEXPowerPanels />} />
            <Route path="/products/power-protection-and-distribution/siemens-simoprime" element={<Simoprime />} />
            <Route path="/products/power-protection-and-distribution/siemens-simosec" element={<Simosec />} />

            {/* products - cable management */}
            <Route path="/products/cable-management" element={<CableManagement />} />
            <Route path="/products/cable-management/trac" element={<CableTrac />} />
            <Route path="/products/cable-management/eris" element={<Eris />} />
            <Route path="/products/cable-management/ellis" element={<Ellis />} />
            <Route path="/products/cable-management/cable-glands" element={<CableGlands />} />
            <Route path="/products/cable-management/cable-glands/:id" element={<SingleCableGland />} />

            {/* enclosures */}
            <Route path="/products/enclosures" element={<Enclosures />} />
            <Route path="/products/enclosures/electrical" element={<ElectricalEnclosures />} />
            <Route path="/products/enclosures/mechanical" element={<MechanicalEnclosures />} />
            <Route path="/products/enclosures/servers" element={<Servers />} />
            <Route path="/products/enclosures/battery" element={<BatteryCabinets />} />
            <Route path="/products/enclosures/heavy-duty" element={<HeavyDuty />} />
            <Route path="/products/enclosures/customised" element={<Customised />} />
            <Route path="/products/enclosures/atex-junction-boxes" element={<ATEXJunctionBoxes />} />
            <Route path="/products/enclosures/meter-boxes" element={<MeterBoxes />} />

            {/* warehouse */}
            <Route path="/products/warehouse-storage" element={<Warehouse />} />

            {/* gaskets */}
            <Route path="/products/gaskets" element={<Gaskets />} />
            <Route path="/products/gaskets/spiral-wound-gaskets" element={<SpiralWound />} />
            <Route path="/products/gaskets/soft-cut-gaskets" element={<SoftCutGaskets />} />
            <Route path="/products/gaskets/kammprofile" element={<Kammprofile />} />
            <Route path="/products/power-generation" element={<PowerGeneration />} />
            <Route path="/products/power-generation/gas-powered-generators" element={<GasPoweredGenerators />} />

            {/* lights */}
            <Route path="/products/lights-wiring" element={<Lights />} />
            <Route path="/products/lights-wiring/residential-and-commercial/lights" element={<Lighting />} />
            <Route path="/products/lights-wiring/residential-and-commercial/lights/duro" element={<Duro />} />
            <Route path="/products/lights-wiring/residential-and-commercial/lights/valor" element={<Valor />} />
            <Route path="/products/lights-wiring/residential-and-commercial/switches-and-sockets" element={<SwitchesAndSockets />} />
            <Route path="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-v8" element={<SimonV8 />} />
            <Route path="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e6" element={<SimonE6 />} />
            <Route path="/products/lights-wiring/residential-and-commercial/switches-and-sockets/simon-e3" element={<SimonE3 />} />
            <Route path="/products/lights-wiring/industrial/wiring" element={<IndustrialWiring />} />
            <Route path="/products/lights-wiring/industrial/lighting" element={<IndustrialLighting />} />

            {/* industries we serve */}
            <Route path="/industries-we-serve/power-and-energy" element={<PowerAndEnergy />} />
            <Route path="/industries-we-serve/oil-and-gas" element={<OilAndGas />} />
            <Route path="/industries-we-serve/residential-and-commercial" element={<ResidentialAndCommercial />} />
            <Route path="/industries-we-serve/industrial-and-manufacturing" element={<IndustrialAndManufacturing />} />
            <Route path="/industries-we-serve/telecommunications" element={<Telecommunications />} />

            {/* case studies */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/power-and-energy" element={<CaseStudyPowerAndEnergy />} />
            <Route path="/case-studies/oil-and-gas" element={<CaseStudiesOilAndGas />} />
            <Route path="/case-studies/aviation" element={<CaseStudiesAviation />} />
            <Route path="/case-studies/industrial-and-manufacturing" element={<CaseStudiesIndustrialAndManufacturing />} />
            <Route path="/case-studies/telecommunications" element={<CaseStudiesTelecommunications />} />
            <Route path="/case-studies/:title" element={<CaseStudy />} />

            {/* services */}
            <Route path="/services" element={<Services />} />

            {/* careers */}
            <Route path="/careers" element={<Careers />} />

            {/* contacts */}
            <Route path="/contacts" element={<Contacts />} />

            {/* news and insights */}
            <Route path="/news-and-insights" element={<NewsAndInsights />} />
            <Route path="/news-and-insights/:id" element={<SingleNewsAndInsight />} />

            {/* cms */}
            <Route path="/cms" element={<ProtectedRoute path="" component={CMS} />}>
              <Route path="/cms/news-and-insights" element={<ProtectedRoute path="" component={CMSNewsAndInsights} />} />
              <Route path="/cms/case-studies" element={<ProtectedRoute path="" component={CMSCaseStudies} />} />
              <Route path="/cms/" element={<ProtectedRoute path="" component={CMSHome} />} />
              <Route path="/cms/about" element={<ProtectedRoute path="" component={CMSAbout} />} />
              <Route path="/cms/services" element={<ProtectedRoute path="" component={CMSServices} />} />
              <Route path="/cms/products" element={<ProtectedRoute path="" component={CMSProducts} />} />
              <Route path="/cms/settings" element={<ProtectedRoute path="" component={CMSSettings} />} />
            </Route>

            {/* auth */}
            <Route path="/cms/sign-in" element={<CMSSignIn />} />

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
