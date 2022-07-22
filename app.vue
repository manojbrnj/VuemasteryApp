Vue.component("product", {
  props: {
   premium: {
      type: Boolean,
      default: true,
    },
  },
  template: `
     <div class="product">
      <p>user is premium  {{shipping}}</p>
        <div class="product-image">
          <img :src="image" :alt="description" srcset="" />
          {{name}}
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <ul>
            <li v-for="(item,i) in details" :key="i">
              <ul>
                <p style="font-weight: bold">{{item.name}}</p>
                <li style="margin: 0 20px; color: #7a6f6f">{{item.price}}</li>
                <li style="margin: 0 20px; color: #7a6f6f">{{item.type}}</li>
              </ul>
             
              <hr />
            </li>
          </ul>
          <!-- <p :display=["inStock"]>instock</p> -->
          <!-- <p v-else>outstock</p> -->
          <p
            v-show="inventory <=10 && inventory > 0"
            :class="{outstock : !instock}"
          >
            Almost Sold Out
          </p>
          <p v-show="inventory <=0 ">Sold Out</p>
          <p v-show="onsell">OnSell</p>
          <button @click="updateCartValue" :disabled="!instock">
            AddToCart
          </button>
          <button @click="decrementCartValue">DeleteToCart</button>
          <div class="cart">
            <p>(cart{{cart}})</p>
          </div>

          <div
            v-for="(item, i) in details"
            :style="{backgroundColor: item.color }"
            class="color-box"
            :key="i"
            @mouseover="updateImage(item.image,item.name)"
          ></div>
                <product-review></product-review>
        </div>
      </div> 
    
    `,
  <!-- //data start -->
  data() {
    return {
      product: "socks",
      price: 20,
      description: "promotion",
      image:
        "https://www.bing.com/th?id=OSC.TOOL54BE3913F8312FE24368C9AA17FB5C185FB3F7F9CCABECE1E012D6544BDA5EB8&w=80&h=80&c=7&o=6&pid=Retail",
      onsell: true,
      name: "chocolate",
      inventory: 10,
      cart: 0,
      instock: true,
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
  <!-- //data Ends -->
  methods: {
    updateCartValue: function () {
      this.$emit('add-to-cart','1')
    },
    <!-- //updateCartValue ends -->
    decrementCartValue: function () {
      if (this.cart > 0) this.cart -= 1;
    },
    <!-- //decrementCartValue ends -->
    updateImage: function (image, name) {
      this.image = image;
      this.name = name;
    },
    
  },
  <!-- //method ends -->
  computed: {
    title: function () {
      return this.brand + " " + this.product;
    },
    shipping:function(){
      if(this.premium){
        return "free"
      }
      else {
        return "cost : 99rs"
      }
    }

  },
});


Vue.component('product-review', {
  template:` 
  <form  class="review-form" @submit.prevent="">
  <p>
  <label for="name">Name
  </label>
  <input id="name"></input>
  </p>
    <p>
  <label for="review">Review
  </label>
  <textarea id="review"></textarea>
  </p>
  <p>
  <select>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  </select>
  </p>
<button type="submit" style="backgroundColor: #E0E0E0; width:100%;padding:10px;border: 1px solid #E0E0E0; border-radius:7px; margin:10px 0 ;
">Submit
</button>
  
  </form>
  <input v-model="name"></input>
  
  ` ,
  data(){
    return{ 
      name:null,
      review:null
    }
  }

})
var app = new Vue({
  el: "#app",
  data(){
    return{ 
  premium: true,
  cart:[]
    }
  },
  methods:{ 
UpdateCart:function (id) { 
  this.cart.push(id)
}

  }

});

