import { Route, Switch } from 'wouter';
import { Navigation } from './components/Navigation';
import { CityGrid } from './components/CityGrid';
import { About } from './pages/About';
import { Experiments } from './pages/Experiments';
import { ZuBenefits } from './pages/ZuBenefits';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AuthProtection } from './components/AuthProtection';
import { popupCities } from './data/popupCities';
import { AdminPage } from './pages/Admin';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-zinc-900">
        <Navigation />
        
        <Switch>
          <Route 
            path="/" 
            component={() => <CityGrid cities={popupCities} />} 
          />
          <Route path="/about" component={About} />
          <Route path="/experiments" component={Experiments} />
          <Route 
            path="/benefits" 
            component={() => (
              <AuthProtection>
                <ZuBenefits />
              </AuthProtection>
            )} 
          />
          <Route 
            path="/admin" 
            component={() => (
              <AuthProtection>
                <AdminPage />
              </AuthProtection>
            )} 
          />
        </Switch>
      </div>
    </ErrorBoundary>
  );
}

export default App;