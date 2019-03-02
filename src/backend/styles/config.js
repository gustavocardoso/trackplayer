export const layout = {
  padding: {
    basic: '0 2rem',
    large: '0 6rem',
    element: '1rem'
  },

  margin: {
    basic: '2rem 2rem',
    large: '2rem 6rem',
    element: '1rem'
  }
}

export const media = {
  large: 'min-width: 900px'
}

export const colorsDefs = {
  black: '#222',
  white: {
    alabaster: '#fafafa',
    pure: '#fff'
  },
  blue: {
    cerulean: '#00B5E1',
    cornflower: '#5d9cec',
    picton: '#23b7e5',
    pictonLight: '#51c6ea'
  },
  gray: {
    athens: '#fafbfc',
    athensLight: '#F2F4F7',
    emperor: '#555555',
    gallery: '#eaeaea',
    geyser: '#cfdbe2',
    mine: '#333333',
    mystic: '#e4eaec',
    porcelain: '#ecf0f1',
    pure: '#929292',
    silver: '#bbb'
  },
  green: {
    jungle: '#27c24c'
  },
  red: {
    carnation: '#f05050'
  }
}

export const colors = {
  bg: {
    main: colorsDefs.gray.athensLight,
    topBar: colorsDefs.blue.picton,
    topBarLight: colorsDefs.blue.pictonLight,
    basicButton: colorsDefs.white.pure,
    activeButton: colorsDefs.green.jungle,
    inactiveButton: colorsDefs.red.carnation,
    editButton: colorsDefs.blue.picton,
    editButtonHover: colorsDefs.blue.cornflower,
    deleteButton: colorsDefs.red.carnation,
    basicContainer: colorsDefs.white.alabaster,
    contentHeading: colorsDefs.gray.athens,
    trackIcon: colorsDefs.gray.porcelain,
    credits: colorsDefs.gray.pure
  },

  border: {
    basicContainer: colorsDefs.gray.geyser,
    basicTrackContainer: colorsDefs.gray.mystic,
    basicButton: colorsDefs.gray.gallery,
    activeButton: colorsDefs.green.jungle,
    inactiveButton: colorsDefs.red.carnation,
    editButton: colorsDefs.blue.picton,
    editButtonHover: colorsDefs.blue.cerulean,
    deleteButton: colorsDefs.red.carnation
  },

  text: {
    main: colorsDefs.black,
    basicButton: colorsDefs.gray.mine,
    topBarTitle: colorsDefs.white.alabaster,
    trackTitle: colorsDefs.blue.cornflower,
    trackInfo: colorsDefs.gray.emperor,
    heading: colorsDefs.gray.pure,
    statusBadge: colorsDefs.white.pure,
    credits: colorsDefs.gray.silver,
    creditsLinks: colorsDefs.gray.silver,
    creditsLinksHover: colorsDefs.gray.emperor
  }
}
