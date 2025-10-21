// import { Search, Car, Plus, User } from "lucide-react";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";
import styles from "./Header.module.css";

export function Header({currentPage, onNavigate}) {
  const navItems = [
    { id: 'home', label: 'Головна' },
    { id: 'add-listing', label: 'Додати оголошення' },
    { id: 'about', label: 'Про нас' },
    { id: 'contact', label: 'Контакти' }
  ];

  return (
    <header className={styles.header}>
        <div>

        </div>
      {/*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*  <div className="flex items-center justify-between h-16">*/}
      {/*    /!* Logo *!/*/}
      {/*    <div */}
      {/*      className="flex items-center space-x-2 cursor-pointer"*/}
      {/*      onClick={() => onNavigate('home')}*/}
      {/*    >*/}
      {/*      <Car className="h-8 w-8 text-blue-600" />*/}
      {/*      <span className="text-xl font-semibold text-gray-900">AutoMarket</span>*/}
      {/*    </div>*/}

      {/*    /!* Navigation *!/*/}
      {/*    <nav className="hidden md:flex items-center space-x-8">*/}
      {/*      {navItems.map((item) => (*/}
      {/*        <button*/}
      {/*          key={item.id}*/}
      {/*          onClick={() => onNavigate(item.id)}*/}
      {/*          className={`text-sm transition-colors ${*/}
      {/*            currentPage === item.id*/}
      {/*              ? 'text-blue-600 border-b-2 border-blue-600 pb-1'*/}
      {/*              : 'text-gray-600 hover:text-gray-900'*/}
      {/*          }`}*/}
      {/*        >*/}
      {/*          {item.label}*/}
      {/*        </button>*/}
      {/*      ))}*/}
      {/*    </nav>*/}

      {/*    /!* Search Bar - only show on home page *!/*/}
      {/*    {currentPage === 'home' && (*/}
      {/*      <div className="flex-1 max-w-lg mx-8">*/}
      {/*        <div className="relative">*/}
      {/*          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />*/}
      {/*          <Input*/}
      {/*            type="text"*/}
      {/*            placeholder="Пошук автомобілів..."*/}
      {/*            className="pl-10 w-full"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    )}*/}

      {/*    /!* User Actions *!/*/}
      {/*    <div className="flex items-center space-x-4">*/}
      {/*      {currentPage !== 'add-listing' && (*/}
      {/*        <Button */}
      {/*          variant="outline" */}
      {/*          className="flex items-center space-x-2"*/}
      {/*          onClick={() => onNavigate('add-listing')}*/}
      {/*        >*/}
      {/*          <Plus className="h-4 w-4" />*/}
      {/*          <span>Додати оголошення</span>*/}
      {/*        </Button>*/}
      {/*      )}*/}
      {/*      <Button variant="ghost" size="icon">*/}
      {/*        <User className="h-5 w-5" />*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </header>
  );
}