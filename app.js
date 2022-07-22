var app = new Vue({
  el: "#app",
  //data start
  data() {
    return {
      product: "socks",
      price: 20,
      description: "promotion",
      image:
        "https://www.bing.com/th?id=OSC.TOOL54BE3913F8312FE24368C9AA17FB5C185FB3F7F9CCABECE1E012D6544BDA5EB8&w=80&h=80&c=7&o=6&pid=Retail",
      onsell: false,
      name: "chocolate",
      inventory: 10,
      cart: 0,
      instock: false,
      brand: "VueMastery",
      details: [
        {
          name: "chocolate",
          price: 10,
          type: "choco",
          color: "black",
          image:
            "https://www.bing.com/th?id=OSC.TOOL54BE3913F8312FE24368C9AA17FB5C185FB3F7F9CCABECE1E012D6544BDA5EB8&w=80&h=80&c=7&o=6&pid=Retail",
        },
        {
          name: "milky",
          price: 40,
          type: "milk",
          color: "green",

          image:
            "https://www.bing.com/th?id=OSC.TOOLAC70389378BE6A6AFA3B171420D2966E7E390C1AFF1508848B6B62584D44ABB6&w=80&h=80&c=7&o=6&pid=Retail",
        },
        {
          name: "wafer",
          price: 17,
          type: "biscute",
          color: "pink",

          image:
            "https://www.bing.com/th?id=OSC.TOOL99E870DF480B932484DECA626482EBC8CE3190AF87514E45E5D06FA9E67D3B53&w=80&h=80&c=7&o=6&pid=Retail",
        },
        {
          name: "laddu",
          price: 100,
          type: "floor",
          color: "yellow",

          image:
            "https://www.bing.com/th?id=OSC.TOOL6FAE6E8A991B5B79F8D765FED706E27B0D8E99B1FE0800CB2666048A5190E045&w=80&h=80&c=7&o=6&pid=Retail",
        },
      ],
    };
  },
  //data Ends
  methods: {
    updateCartValue: function () {
      this.cart += 1;
    },
    //updateCartValue ends
    decrementCartValue: function () {
      if (this.cart > 0) this.cart -= 1;
    },
    //decrementCartValue ends
    updateImage: function (image, name) {
      this.image = image;
      this.name = name;
    },
  },
  //method ends
  computed: {
    title: function () {
      return this.brand + " " + this.product;
    },
  },
});
