const data = [
  {
    name: "MSFT",
    dates: [
      {date: "2018-01-04", closing: 87.11},
      {date: "2018-01-03", closing: 86.35},
      {date: "2018-01-02", closing: 85.95},
      {date: "2017-12-29", closing: 85.54},
      {date: "2017-12-28", closing: 85.72},
      {date: "2017-12-27", closing: 85.71},
      {date: "2017-12-26", closing: 85.4},
      {date: "2017-12-22", closing: 85.51},
      {date: "2017-12-21", closing: 85.5},
      {date: "2017-12-20", closing: 85.52},
      {date: "2017-12-19", closing: 85.83},
      {date: "2017-12-18", closing: 86.38},
      {date: "2017-12-15", closing: 86.85},
      {date: "2017-12-14", closing: 84.69},
      {date: "2017-12-13", closing: 85.35},
      {date: "2017-12-12", closing: 85.58},
      {date: "2017-12-11", closing: 85.23},
      {date: "2017-12-08", closing: 84.16},
      {date: "2017-12-07", closing: 82.49},
      {date: "2017-12-06", closing: 82.78}
    ]
  },

  {
    name: "AAPL",
    dates: [
      {date: "2018-01-04", closing: 173.03},
      {date: "2018-01-03", closing: 172.23},
      {date: "2018-01-02", closing: 172.26},
      {date: "2017-12-29", closing: 169.23},
      {date: "2017-12-28", closing: 171.08},
      {date: "2017-12-27", closing: 170.6},
      {date: "2017-12-26", closing: 170.57},
      {date: "2017-12-22", closing: 175.01},
      {date: "2017-12-21", closing: 175.01},
      {date: "2017-12-20", closing: 174.35},
      {date: "2017-12-19", closing: 174.54},
      {date: "2017-12-18", closing: 176.42},
      {date: "2017-12-15", closing: 173.97},
      {date: "2017-12-14", closing: 172.22},
      {date: "2017-12-13", closing: 172.27},
      {date: "2017-12-12", closing: 171.7},
      {date: "2017-12-11", closing: 172.67},
      {date: "2017-12-08", closing: 169.37},
      {date: "2017-12-07", closing: 169.32},
      {date: "2017-12-06", closing: 169.01}
    ]
  },

  {
    name: "IBM",
    dates: [
      {date: "2018-01-04", closing: 161.7},
      {date: "2018-01-03", closing: 158.49},
      {date: "2018-01-02", closing: 154.25},
      {date: "2017-12-29", closing: 153.42},
      {date: "2017-12-28", closing: 154.04},
      {date: "2017-12-27", closing: 153.13},
      {date: "2017-12-26", closing: 152.83},
      {date: "2017-12-22", closing: 152.5},
      {date: "2017-12-21", closing: 151.5},
      {date: "2017-12-20", closing: 152.95},
      {date: "2017-12-19", closing: 153.23},
      {date: "2017-12-18", closing: 153.33},
      {date: "2017-12-15", closing: 152.5},
      {date: "2017-12-14", closing: 154},
      {date: "2017-12-13", closing: 153.91},
      {date: "2017-12-12", closing: 156.74},
      {date: "2017-12-11", closing: 155.41},
      {date: "2017-12-08", closing: 154.81},
      {date: "2017-12-07", closing: 153.57},
      {date: "2017-12-06", closing: 154.1}
    ]
  },

  {
    name: "INTC",
    dates: [
      {date: "2018-01-04", closing: 44.43},
      {date: "2018-01-03", closing: 45.26},
      {date: "2018-01-02", closing: 46.85},
      {date: "2017-12-29", closing: 46.16},
      {date: "2017-12-28", closing: 46.22},
      {date: "2017-12-27", closing: 46.11},
      {date: "2017-12-26", closing: 46.08},
      {date: "2017-12-22", closing: 46.7},
      {date: "2017-12-21", closing: 46.76},
      {date: "2017-12-20", closing: 47.56},
      {date: "2017-12-19", closing: 47.04},
      {date: "2017-12-18", closing: 46.26},
      {date: "2017-12-15", closing: 44.56},
      {date: "2017-12-14", closing: 43.26},
      {date: "2017-12-13", closing: 43.34},
      {date: "2017-12-12", closing: 43.33},
      {date: "2017-12-11", closing: 43.66},
      {date: "2017-12-08", closing: 43.35},
      {date: "2017-12-07", closing: 43.08},
      {date: "2017-12-06", closing: 43.45}
    ]
  },

  {
    name: "BA",
    dates: [
      {date: "2018-01-04", closing: 296.67},
      {date: "2018-01-03", closing: 297.8},
      {date: "2018-01-02", closing: 296.84},
      {date: "2017-12-29", closing: 294.91},
      {date: "2017-12-28", closing: 296.35},
      {date: "2017-12-27", closing: 295.62},
      {date: "2017-12-26", closing: 295.36},
      {date: "2017-12-22", closing: 295.1},
      {date: "2017-12-21", closing: 295.03},
      {date: "2017-12-20", closing: 297.9},
      {date: "2017-12-19", closing: 297.25},
      {date: "2017-12-18", closing: 296.14},
      {date: "2017-12-15", closing: 293.94},
      {date: "2017-12-14", closing: 293.88},
      {date: "2017-12-13", closing: 291.84},
      {date: "2017-12-12", closing: 289.94},
      {date: "2017-12-11", closing: 283.16},
      {date: "2017-12-08", closing: 285.9},
      {date: "2017-12-07", closing: 281.97},
      {date: "2017-12-06", closing: 278.27}
    ]
  }
];

export default data;
