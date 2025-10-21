import { useState } from "react";
import { Header } from "./components/Header";
// import { HomePage } from "./components/HomePage";
// import { AddListingPage } from "./components/AddListingPage";
// import { AboutPage } from "./components/AboutPage";
// import { ContactPage } from "./components/ContactPage";
// import { Toaster } from "./components/ui/sonner";

export default function App() {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page) => {
        setCurrentPage(page);
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'add-listing':
                // return <AddListingPage />;
            case 'about':
                // return <AboutPage />;
            case 'contact':
                // return <ContactPage />;
            default:
                // return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header currentPage={currentPage} onNavigate={handleNavigate} />
            {/*{renderCurrentPage()}*/}
            {/*<Toaster />*/}
        </div>
    );
}