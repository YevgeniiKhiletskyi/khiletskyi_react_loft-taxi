import image from './Image/background.png';

const styles = {
  section: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: `url(${image}) center center/cover no-repeat`,
    
  },
  
  form: {
    width: '250px',
    height: '540px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    background: '#ffffff',
    padding: '12px 92px',
    boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    
    
  },
  
  btn: {
    borderRadius: '70px',
  },
};

export default styles;