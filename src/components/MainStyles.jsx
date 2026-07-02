import {StyleSheet} from 'react-native';

const Allstyles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 25,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },

  inputSearch: {
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 35,
    paddingHorizontal: 25,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  buttonText: {
    fontSize: 28,
    color: '#000',
    fontFamily: 'IrishGrover',
    fontWeight: '900',
  },

  title: {
    color: '#fff',
    fontSize: 31,
    lineHeight: 43,
    fontFamily: 'IrishGrover',
    marginBottom: 10,
    marginLeft: 10,
    letterSpacing: 0.5,
  },

  bookList: {
    flex: 1,
  },

  bookListContent: {
    paddingBottom: 90,
  },

  bookItemContainer: {
    marginBottom: 14,
  },

  bookItem: {
    minHeight: 175,
    backgroundColor: 'rgba(217,217,217,0.78)',
    borderRadius: 45,
    paddingLeft: 25,
    paddingRight: 18,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  bookTextContainer: {
    flex: 1,
    paddingRight: 12,
  },

  bookTitle: {
    fontSize: 22,
    color: '#000',
    fontFamily: 'IrishGrover',
    fontWeight: '900',
    marginBottom: 28,
  },

  bookAuthor: {
    fontSize: 21,
    color: '#000',
    fontFamily: 'IrishGrover',
    fontWeight: '900',
  },

  bookCover: {
    width: 95,
    height: 140,
    borderRadius: 3,
    resizeMode: 'cover',
  },

  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  navIcon: {
    fontSize: 34,
    color: '#777',
  },

  // keep your old styles below if other screens still use them

  button: {
    width: 294,
    height: 86,
    backgroundColor: '#d9d9d9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 21,
    alignSelf: 'center',
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

  loginForm: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },

  loginForm1: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
  },
  // shared screen spacing
screenContent: {
  flex: 1,
  paddingTop: 55,
  paddingHorizontal: 25,
},

detailsCard: {
  backgroundColor: '#ffffff',
  padding: 14,
  flexDirection: 'row',
  marginTop: 22,
  marginBottom: 20,
},

detailsCover: {
  width: 135,
  height: 225,
  resizeMode: 'cover',
},

detailsTextBox: {
  flex: 1,
  marginLeft: 12,
  justifyContent: 'center',
},

detailsText: {
  fontFamily: 'IrishGrover',
  fontSize: 20,
  color: '#6d1717',
  fontWeight: '900',
  lineHeight: 26,
},

largeActionButton: {
  height: 130,
  backgroundColor: 'rgba(217,217,217,0.75)',
  borderRadius: 55,
  marginBottom: 28,
  paddingHorizontal: 35,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

largeActionText: {
  fontFamily: 'IrishGrover',
  fontSize: 36,
  color: '#6d1717',
  fontWeight: '900',
},

smallActionSubText: {
  fontFamily: 'IrishGrover',
  fontSize: 18,
  color: '#6d1717',
  marginTop: -6,
},

arrowBox: {
  width: 63,
  height: 42,
  backgroundColor: '#f2f2f2',
  justifyContent: 'center',
  alignItems: 'center',
},

arrowText: {
  fontSize: 34,
  color: '#000',
  marginTop: -8,
},

bookContentCard: {
  backgroundColor: '#ffffff',
  padding: 14,
  flexDirection: 'row',
  marginTop: 20,
  marginBottom: 12,
},

bookContentDescription: {
  backgroundColor: 'rgba(255,255,255,0.65)',
  padding: 18,
  marginBottom: 20,
},

bookContentParagraph: {
  fontFamily: 'IrishGrover',
  fontSize: 21,
  color: '#6d1717',
  fontWeight: '900',
  lineHeight: 28,
},

ratingCard: {
  backgroundColor: 'rgba(255,255,255,0.7)',
  padding: 18,
  marginBottom: 90,
},

ratingText: {
  fontFamily: 'IrishGrover',
  fontSize: 22,
  color: '#000',
  fontWeight: '900',
  lineHeight: 32,
},

sectionTitle: {
  color: '#fff',
  fontSize: 30,
  fontFamily: 'IrishGrover',
  marginTop: 25,
  marginBottom: 22,
  fontWeight: '900',
},

gridListContent: {
  paddingBottom: 100,
},

bookGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},

gridBookCard: {
  width: '47%',
  backgroundColor: 'rgba(217,217,217,0.65)',
  padding: 14,
  marginBottom: 30,
},

gridBookImage: {
  width: '100%',
  height: 195,
  resizeMode: 'cover',
  marginBottom: 8,
},

gridBookTitle: {
  fontFamily: 'IrishGrover',
  fontSize: 22,
  color: '#000',
  fontWeight: '900',
},

progressLine: {
  height: 10,
  backgroundColor: '#eeeeee',
  marginTop: 15,
},

progressFill: {
  height: 10,
  backgroundColor: '#000',
  width: '45%',
},

profilePanel: {
  backgroundColor: 'rgba(255,255,255,0.55)',
  marginTop: 28,
  paddingVertical: 35,
  paddingHorizontal: 20,
  marginBottom: 90,
},

profileHeader: {
  backgroundColor: 'rgba(105,35,35,0.55)',
  borderRadius: 22,
  paddingHorizontal: 20,
  paddingVertical: 10,
  marginBottom: 45,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

profileName: {
  fontFamily: 'IrishGrover',
  fontSize: 22,
  color: '#000',
  fontWeight: '900',
},

profileAvatar: {
  width: 90,
  height: 90,
  borderRadius: 45,
  backgroundColor: '#f5f5f5',
  justifyContent: 'center',
  alignItems: 'center',
},

profileAvatarText: {
  fontSize: 52,
  color: '#999',
},

profileMenuButton: {
  height: 65,
  backgroundColor: 'rgba(105,35,35,0.55)',
  borderRadius: 20,
  paddingLeft: 20,
  paddingRight: 12,
  marginBottom: 38,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
},

profileMenuText: {
  fontFamily: 'IrishGrover',
  fontSize: 22,
  color: '#000',
  fontWeight: '900',
},
});

export default Allstyles;