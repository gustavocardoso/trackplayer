export const layout = {
  padding: {
    basic: '0 2rem',
    large: '0 6rem',
    xLarge: '0 26rem',
    element: '1rem'
  },

  margin: {
    basic: '2rem 2rem',
    large: '2rem 6rem',
    xLarge: '2rem 26rem',
    element: '1rem'
  }
}

export const media = {
  large: 'min-width: 900px',
  xLarge: 'min-width: 1500px'
}

export const fonts = {
  mainFont: '"Source Sans Pro", sans-serif'
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
    curious: '#277EE2',
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
    mystic: '#dde6e9',
    porcelain: '#ecf0f1',
    pure: '#929292',
    silver: '#bbb',
    trout: '#495057'
  },
  green: {
    elf: '#0C947A',
    jungle: '#27c24c'
  },
  red: {
    carnation: '#f05050',
    pomegranate: '#F42831'
  }
}

export const colors = {
  bg: {
    main: colorsDefs.gray.athensLight,
    topBar: colorsDefs.blue.picton,
    topBarLight: colorsDefs.blue.pictonLight,
    basicButton: colorsDefs.white.pure,
    activeButton: colorsDefs.green.jungle,
    inactiveButton: colorsDefs.gray.gallery,
    editButton: colorsDefs.blue.cornflower,
    editButtonHover: colorsDefs.blue.curious,
    deleteButton: colorsDefs.red.carnation,
    deleteButtonHover: colorsDefs.red.pomegranate,
    basicContainer: colorsDefs.white.alabaster,
    contentHeading: colorsDefs.gray.athens,
    trackIcon: colorsDefs.gray.porcelain,
    credits: colorsDefs.gray.pure,
    navigationAddButton: colorsDefs.green.jungle,
    navigationAddButtonHover: colorsDefs.green.elf,
    navigationCancelButton: colorsDefs.red.carnation,
    input: colorsDefs.white.pure,
    buttonDisabled: colorsDefs.gray.mystic,
    rangeValue: colorsDefs.gray.geyser
  },

  border: {
    basicContainer: colorsDefs.gray.geyser,
    basicTrackContainer: colorsDefs.gray.mystic,
    basicButton: colorsDefs.gray.gallery,
    activeButton: colorsDefs.green.jungle,
    inactiveButton: colorsDefs.gray.gallery,
    editButton: colorsDefs.blue.picton,
    editButtonHover: colorsDefs.blue.curious,
    deleteButton: colorsDefs.red.carnation,
    deleteButtonHover: colorsDefs.red.pomegranate,
    navigationAddButton: colorsDefs.green.jungle,
    navigationAddButtonHover: colorsDefs.green.elf,
    navigationCancelButton: colorsDefs.red.carnation,
    input: colorsDefs.gray.mystic,
    inputFocus: colorsDefs.blue.cornflower,
    inputCheckboxActive: colorsDefs.green.jungle
  },

  text: {
    main: colorsDefs.black,
    basicButton: colorsDefs.gray.mine,
    topBarTitle: colorsDefs.white.alabaster,
    trackTitle: colorsDefs.blue.cornflower,
    trackInfo: colorsDefs.gray.emperor,
    heading: colorsDefs.gray.pure,
    statusBadgeActive: colorsDefs.green.jungle,
    statusBadgeInactive: colorsDefs.red.pomegranate,
    credits: colorsDefs.gray.silver,
    creditsLinks: colorsDefs.gray.silver,
    creditsLinksHover: colorsDefs.gray.emperor,
    navigationAddButton: colorsDefs.white.pure,
    navigationCancelButton: colorsDefs.white.pure,
    input: colorsDefs.gray.trout,
    inputCheckboxActive: colorsDefs.green.jungle,
    buttonDisabled: colorsDefs.gray.silver,
    actionButton: colorsDefs.gray.emperor,
    actionButtonHover: colorsDefs.white.pure,
    rangeValue: colorsDefs.gray.trout,
    logMessage: colorsDefs.red.pomegranate
  }
}
