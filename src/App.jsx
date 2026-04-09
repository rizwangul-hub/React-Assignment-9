import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ProfileHeader from "./components/ProfileHeader";
import profile from "./../public/profile.jpg";
import ProfileSidebar from "./components/ProfileSidebar";
import Repositories from "./components/RepositoryList";

function App() {
  return (
    <div>
      <div className="flex">
        {" "}
        <div className="flex  h-screen bg-gray-100">
          <ProfileSidebar
            followers="200k"
            following="0"
            location="Pakistan"
            website="https://linuxfoundation.org"
          />
        </div>
        <div>
          {" "}
          <div className="">
            <ProfileHeader
              image={profile}
              name="Rizwan"
              username="@rizwan Ullah"
              bio="Mern stact developer"
            />
          </div>
          <Repositories />
        </div>
      </div>
    </div>
  );
}

export default App;
