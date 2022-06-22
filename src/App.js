import React from 'react';
import { Contact, Footer, Form, Header, Ideas, Navbar, Save, See, Shop } from './components';

function App() {
    return (
        <div className="App">
          <Navbar/>
          <main>
            <Header />
            <Shop/>
            <Save />
            <See />
            <Ideas/>
            <Form/>
            <Contact/>
          </main>
          <Footer />
        </div>
    );
}

export default App;
