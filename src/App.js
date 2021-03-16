import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

// --Additional notes on MVP--
// 1. Going to need a createUser function.
// 2. Going to need a Registration page.
// 3. Create Account Button which links 
// to Registration page.
// 4. Will Login go to Feed instantly or Profile?
// 5. Will we have messages as feature and then
// can post updates and status / pictures or 
// just have messages be in the feed ?


