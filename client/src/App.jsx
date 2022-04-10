import Header from './components/header/header';
import List from './components/list/list';
import Map from './components/map/map';
import { CssBaseline,Grid } from '@material-ui/core';

function App() {

  return (
    <>
      <CssBaseline/>
      <Header/>
      <Grid container spacing={3} styles={{width:'100vw'}}>
        <Grid item xs={12} md={4}>
          <List/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
