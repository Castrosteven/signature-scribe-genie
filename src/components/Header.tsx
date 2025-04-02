
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900">Email Signature Generator</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
          >
            Signature Generator
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => navigate("/custom-layout")}
          >
            Custom Layout
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
