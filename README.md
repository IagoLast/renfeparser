# METEOSAPI SERVER

REST Server for renfe schedules.


## Getting started

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


### Install dependences

    yarn install

## Usage

### GET /:from/:to/:date


Where:

- `from`: Is the origin station id.
- `to`: Is the destiny station id.
- `date`: Is the travel date, formated as: yyyy-mm-dd


Example response: 

```json
  [
  {
    "train": "12411 REGIONAL",
    "departure": "05.38",
    "arrival": "07.13",
    "price": "13,60"
  },
  {
    "train": "09073 MD",
    "departure": "07.00",
    "arrival": "08.11",
    "price": "16,05"
  },
  {
    "train": "09083 MD",
    "departure": "08.00",
    "arrival": "09.04",
    "price": "16,05"
  },
  {
    "train": "09093 MD",
    "departure": "09.00",
    "arrival": "10.04",
    "price": "16,05"
  },
  {
    "train": "12421 REGIONAL",
    "departure": "10.00",
    "arrival": "11.37",
    "price": "13,60"
  },
  {
    "train": "09113 MD",
    "departure": "11.00",
    "arrival": "12.04",
    "price": "16,05"
  },
  {
    "train": "09123 MD",
    "departure": "12.00",
    "arrival": "13.04",
    "price": "16,05"
  },
  {
    "train": "09133 MD",
    "departure": "13.00",
    "arrival": "14.10",
    "price": "16,05"
  },
  {
    "train": "99741 AVANT-MD",
    "departure": "14.00",
    "arrival": "15.33",
    "price": "9,70"
  },
  {
    "train": "09153 MD",
    "departure": "15.00",
    "arrival": "16.04",
    "price": "16,05"
  },
  {
    "train": "12431 REGIONAL",
    "departure": "15.45",
    "arrival": "17.21",
    "price": "13,60"
  },
  {
    "train": "09173 MD",
    "departure": "17.00",
    "arrival": "18.04",
    "price": "16,05"
  },
  {
    "train": "09183 MD",
    "departure": "18.00",
    "arrival": "19.04",
    "price": "16,05"
  },
  {
    "train": "12441 REGIONAL",
    "departure": "19.08",
    "arrival": "20.53",
    "price": "13,60"
  },
  {
    "train": "99799 AVANT-MD",
    "departure": "20.00",
    "arrival": "21.35",
    "price": "9,70"
  },
  {
    "train": "09213 MD",
    "departure": "21.00",
    "arrival": "22.14",
    "price": "16,05"
  }
]
```


## License

MIT
