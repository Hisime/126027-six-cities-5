import {OfferType} from '../consts';
import {Features} from '../consts';

export default [
  {
    id: 1,
    pictures: [
      {
        src: `img/apartment-02.jpg`,
        title: `Photo studio`,
      },
      {
        src: `img/room.jpg`,
        title: `Photo studio2`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio3`,
      },
      {
        src: `img/apartment-03.jpg`,
        title: `Photo studio4`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio5`,
      },
      {
        src: `img/studio-01.jpg`,
        title: `Photo studio6`,
      }
    ],
    premium: true,
    title: `Beautiful & luxurious studio at great location`,
    favorite: true,
    rate: 4.8,
    type: OfferType.APARTMENT,
    bedRoomsCount: 3,
    guestsCount: 4,
    price: 120,
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      super: true,
      about: `Friendly and positive girl`
    },
    features: [
      Features.WIFI,
      Features.HEATING,
      Features.KITCHEN,
      Features.FRIDGE,
      Features.WASHING_MACHINE,
      Features.COFFEE_MACHINE,
      Features.DISHWASHER,
      Features.TOWELS,
      Features.CABEL_TV
    ],
    reviews: [
      {
        avatar: `img/avatar-max.jpg`,
        name: `Max`,
        rate: 3,
        date: `April 2019`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      },
      {
        avatar: `img/avatar-max.jpg`,
        name: `Edvard`,
        rate: 5,
        date: `April 2019`,
        text: `Perfect place`
      }
    ],
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    pictures: [
      {
        src: `img/apartment-02.jpg`,
        title: `Photo studio`,
      },
      {
        src: `img/room.jpg`,
        title: `Photo studio2`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio3`,
      },
      {
        src: `img/apartment-03.jpg`,
        title: `Photo studio4`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio5`,
      },
      {
        src: `img/studio-01.jpg`,
        title: `Photo studio6`,
      }
    ],
    premium: true,
    title: `Small & cozy room`,
    favorite: false,
    rate: 4,
    type: OfferType.ROOM,
    bedRoomsCount: 1,
    guestsCount: 2,
    price: 10,
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Helena`,
      super: false,
      about: `Just normal host`
    },
    features: [
      Features.WIFI,
      Features.HEATING,
      Features.KITCHEN,
      Features.FRIDGE
    ],
    reviews: [
      {
        avatar: `img/avatar-max.jpg`,
        name: `Leo`,
        rate: 3,
        date: `April 2019`,
        text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`
      },
      {
        avatar: `img/avatar-max.jpg`,
        name: `Edvard`,
        rate: 5,
        date: `April 2019`,
        text: `Perfect place`
      }
    ],
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    pictures: [
      {
        src: `img/apartment-02.jpg`,
        title: `Photo studio`,
      },
      {
        src: `img/room.jpg`,
        title: `Photo studio2`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio3`,
      },
      {
        src: `img/apartment-03.jpg`,
        title: `Photo studio4`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio5`,
      },
      {
        src: `img/studio-01.jpg`,
        title: `Photo studio6`,
      }
    ],
    premium: true,
    title: `Bright large house, arty, bohemian decor`,
    favorite: false,
    rate: 4.8,
    type: OfferType.HOUSE,
    bedRoomsCount: 2,
    guestsCount: 5,
    price: 1000,
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Max`,
      super: true,
      about: `I work from home most days, I’m a photographer, so I’m around to help with any queries on the area.`
    },
    features: [
      Features.WIFI,
      Features.HEATING,
      Features.KITCHEN,
      Features.FRIDGE,
      Features.WASHING_MACHINE,
      Features.COFFEE_MACHINE,
      Features.DISHWASHER,
      Features.TOWELS,
      Features.CABEL_TV
    ],
    reviews: [
      {
        avatar: `img/avatar-max.jpg`,
        name: `Peter`,
        rate: 4.7,
        date: `April 2019`,
        text: `Mark is a fab host! The house is perfect location for great local spots`
      },
      {
        avatar: `img/avatar-max.jpg`,
        name: `Edvard`,
        rate: 5,
        date: `April 2019`,
        text: `Mark is a fab host! The house is perfect location for great local spots.`
      }
    ],
    coords: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    pictures: [
      {
        src: `img/apartment-02.jpg`,
        title: `Photo studio`,
      },
      {
        src: `img/room.jpg`,
        title: `Photo studio2`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio3`,
      },
      {
        src: `img/apartment-03.jpg`,
        title: `Photo studio4`,
      },
      {
        src: `img/apartment-01.jpg`,
        title: `Photo studio5`,
      },
      {
        src: `img/studio-01.jpg`,
        title: `Photo studio6`,
      }
    ],
    premium: false,
    title: `Bright large house, arty, bohemian decor`,
    favorite: true,
    rate: 3,
    type: OfferType.HOTEL,
    bedRoomsCount: 1,
    guestsCount: 2,
    price: 50,
    host: {
      image: `img/avatar-angelina.jpg`,
      name: `Hotel room 5min to Tower Bridge`,
      super: true,
      about: `I am very friendly and communicative`
    },
    features: [
      Features.WIFI,
      Features.HEATING,
      Features.KITCHEN,
      Features.FRIDGE,
      Features.WASHING_MACHINE,
      Features.COFFEE_MACHINE,
      Features.DISHWASHER,
      Features.TOWELS,
    ],
    reviews: [
      {
        avatar: `img/avatar-max.jpg`,
        name: `Dan`,
        rate: 4.9,
        date: `April 2018`,
        text: `Great clean place. Very quiet. And a lovely helpful host.`
      },
      {
        avatar: `img/avatar-max.jpg`,
        name: `Edvard`,
        rate: 5,
        date: `April 2017`,
        text: `Great clean place. Very quiet. And a lovely helpful host.`
      }
    ],
    coords: [52.3809553943508, 4.939309666406198]
  }
];
