import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Input from './components/Input';
import Card from './components/Card';
import Navigation from './components/Navigation';
import Title from './components/Title';

import api from './services/api';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import './App.css';

interface IService {
  id: number;
  title: string;
  icon_url: string;
}

interface IServiceData {
  data: IService[]
}

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);
  const [services, setServices] = useState<IServiceData>({ data: [] });

  useEffect(() => {
      api.get<IServiceData>('/services')
      .then(response =>{ setServices(response.data) })
    }, 
  [])
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <Input placeholder="O que você está buscando?" width={330}/>
        <Title text="Nossos serviços disponíveis para você"/>

        <div className="container-test">
          {services.data.map((service: IService) => (
             <Card 
             text={service.title} 
             icon_url={service.icon_url}
             key={service.id}
           />
          ))}
        </div>

        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
