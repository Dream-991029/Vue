var vm = new Vue({
  el: '#app',
  data: {
    books: [
      {
        "id": 1,
        "name": "三国演义",
        "date": "2012-6",
        "price": 85.00,
        "count": 1
      },
      {
        "id": 2,
        "name": "水浒传",
        "date": "2014-5",
        "price": 69.00,
        "count": 2
      },
      {
        "id": 3,
        "name": "红楼梦",
        "date": "2015-6",
        "price": 168.00,
        "count": 6
      },
      {
        "id": 4,
        "name": "西游记",
        "date": "2021-4",
        "price": 46.00,
        "count": 2
      },
      {
        "id": 5,
        "name": "钢铁是怎样炼成的",
        "date": "2017-7",
        "price": 85.00,
        "count": 4
      }
    ],
    num: 0
  },
  methods: {
    div(index) {
      this.books[index]["count"]--;
    },
    sum(index) {
      this.books[index]["count"]++;
    },
    getFlag(count) {
      return count <= 1; 
    },
    remove(index) {
      this.books.splice(index, 1);
    }
  },
  computed: {
    totalPrice() {
      // totalprice = 0;
      // for (let item of this.books) {
      //   totalprice += (item["count"] * item["price"])
      // }
      // return totalprice;
      return this.books.reduce(
        (prevalue, book) => prevalue + (book["count"] * book["price"])
      , 0);
    }
  },
  filters: {
    formatPrice(data) {
      return "¥" + data.toFixed() + "元";
    }
  }
});