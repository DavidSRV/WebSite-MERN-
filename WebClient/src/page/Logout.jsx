import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const history = useNavigate();

  const Logout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 401 || !res) {
        window.alert("Please Logout Later");
      } else {
        history("/");
        window.location.reload();
      }
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    Logout();
  },);

  return <div>Logout</div>;
}

export default Logout;
