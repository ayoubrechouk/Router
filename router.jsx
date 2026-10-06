import React, { useState, useReducer } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const Home = () => {
  return (
      <div>
            <h2>Bienvenue dans notre application</h2>
                  <p>Choisissez dans le menu ci-dessus pour voir les exercices.</p>
                      </div>
                        );
                        };

                        const StateExercise = () => {
                          const [count, setCount] = useState(0);

                            return (
                                <div style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
                                      <h2>Exemple avec useState</h2>
                                            <p>Compteur : {count}</p>
                                                  <button onClick={() => setCount(count + 1)}>Incrémenter</button>
                                                      </div>
                                                        );
                                                        };

                                                        const reducer = (state, action) => {
                                                          switch (action.type) {
                                                              case 'INCREMENT':
                                                                    return { count: state.count + 1 };
                                                                        case 'DECREMENT':
                                                                              return { count: state.count - 1 };
                                                                                  default:
                                                                                        return state;
                                                                                          }
                                                                                          };

                                                                                          const ReducerExercise = () => {
                                                                                            const [state, dispatch] = useReducer(reducer, { count: 0 });

                                                                                              return (
                                                                                                  <div style={{ padding: '20px', backgroundColor: '#fff0f5', borderRadius: '8px' }}>
                                                                                                        <h2>Exemple avec useReducer</h2>
                                                                                                              <p>Compteur : {state.count}</p>
                                                                                                                    <button onClick={() => dispatch({ type: 'INCREMENT' })} style={{ marginRight: '10px' }}>+</button>
                                                                                                                          <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
                                                                                                                              </div>
                                                                                                                                );
                                                                                                                                };

                                                                                                                                const App = () => {
                                                                                                                                  const navLinkStyle = ({ isActive }) => ({
                                                                                                                                      marginRight: '15px',
                                                                                                                                          textDecoration: 'none',
                                                                                                                                              color: isActive ? 'red' : 'blue',
                                                                                                                                                  fontWeight: isActive ? 'bold' : 'normal'
                                                                                                                                                    });

                                                                                                                                                      return (
                                                                                                                                                          <BrowserRouter>
                                                                                                                                                                <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                                                                                                                                                                        <h1>Exercice React Router</h1>
                                                                                                                                                                                
                                                                                                                                                                                        <nav style={{ padding: '15px', backgroundColor: '#eee', borderRadius: '8px', marginBottom: '20px' }}>
                                                                                                                                                                                                  <NavLink to="/" style={navLinkStyle}>Accueil</NavLink>
                                                                                                                                                                                                            <NavLink to="/use-state" style={navLinkStyle}>useState</NavLink>
                                                                                                                                                                                                                      <NavLink to="/use-reducer" style={navLinkStyle}>useReducer</NavLink>
                                                                                                                                                                                                                              </nav>

                                                                                                                                                                                                                                      <Routes>
                                                                                                                                                                                                                                                <Route path="/" element={<Home />} />
                                                                                                                                                                                                                                                          <Route path="/use-state" element={<StateExercise />} />
                                                                                                                                                                                                                                                                    <Route path="/use-reducer" element={<ReducerExercise />} />
                                                                                                                                                                                                                                                                            </Routes>
                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                      </BrowserRouter>
                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                        export default App;
                                                                                                                                                                                                                                                                                        