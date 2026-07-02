import { StyleSheet } from "react-native";

const Allstyles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.28)', // Slight dark overlay like the design
  },

  title: {
    color: '#fff',
    fontSize: 31,
    lineHeight: 43,
    textAlign: 'center',
    fontFamily: 'IrishGrover',
    marginBottom: 78,
    letterSpacing: 0.5,
  },
  button: {
    width: 294,
    height: 86,
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    alignSelf: 'center', 
    justifyContent: 'center', 
  },
  buttonText: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'IrishGrover',
    fontWeight: '900',
  },
  input: {
    width: 302,
    height: 68,
    backgroundColor: '#d9d9d9',
    borderRadius: 22,
    paddingHorizontal: 25,
    marginBottom: 40,
    fontSize: 21,
    color: '#333',
    fontFamily: 'IrishGrover',
  },

    form: {
    width: '100%',
    alignItems: 'center',
     justifyContent: 'center', 

  },
  loginForm:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',   
    marginTop: 300
  }, 
  bookList: {

  },
  loginForm1:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',   
    marginTop: 300
  }, 
  
  bookItemContainer: {
    marginBottom: 20,
  },

  bookItem: {
  flexDirection: 'row',      
  alignItems: 'center',       
  padding: 10,
  marginBottom: 12,         
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  borderRadius: 8,
},

bookCover: {
  width: 60,                  
  height: 90,                 
  borderRadius: 4,            
  resizeMode: 'cover',
},

bookTextContainer: {
  flex: 1,                    
  marginLeft: 14,            
},

bookTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
},

bookAuthor: {
  fontSize: 14,
  color: '#666',
  marginTop: 4,
},

});

export default Allstyles;