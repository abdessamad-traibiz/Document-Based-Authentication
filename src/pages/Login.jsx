import React from "react";
import draw2 from "../assets/images/draw2.webp";
import data from "../Utils/User.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/Auth";
import { Oval } from "react-loader-spinner";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pending, setPending] = useState(false);
  let navigate = useNavigate();
  const onSignIn = async (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      setPending(true);
      setTimeout(() => {
        let user = data.find(
          (el) => el.email === email && el.password === password
        );
  
        if (user) {
          login();
          navigate("/")
        } else {
          alert("Utilisateur introuvable");
        }
        setPending(false);
      }, 1500);
    }
  };

  return (
    <section className="h-full gradient-form  md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="lg:flex lg:flex-wrap g-0">
              <div className="lg:w-6/12 px-4 md:px-0">
                <div className="md:p-12 md:mx-6">
                  <div className="text-center">
                    <h4 className="text-3xl font-bold mt-1 mb-16 pb-1">AuthDoc.</h4>
                  </div>
                  <form onSubmit={onSignIn}>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full h-11 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color7 focus:outline-none"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        className="form-control block w-full h-11 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-color7 focus:outline-none"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="text-center pt-1 mb-12 pb-1">
                      <button
                        className="bg-color7 px-6 py-3.5 flex items-center justify-center text-white font-medium text-s leading-tight rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="submit"
                      >
                        {pending ? 
                          <Oval
                            height="18"
                            width="18"
                            color="#fff"
                            radius="9"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                          />
                          :
                          <p>
                            Se Connecter
                          </p>
                        }
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="md:w-8/12 lg:w-6/12 mb-3 md:mb-0">
                <img src={draw2} className="w-full" alt="sample" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
