const products = [
  {
    id: 1,
    name: '童装/女童 袜子(2双装) 405454 优衣库UNIQLO',
    source: '//g-search2.alicdn.com/img/bao/uploaded/i4/i3/196993935/TB1w4LVfaLN8KJjSZFmXXcQ6XXa_!!0-item_pic.jpg_360x360Q90.jpg_.webp',
    price: '35.00',
    brand: '优衣库'
  },
  {
    id: 2,
    name: '羊毛袜子浪莎秋冬款加厚袜子男短袜兔羊毛女袜中筒袜冬季保暖男袜',
    source: '//g-search1.alicdn.com/img/bao/uploaded/i4/i1/272715291/O1CN011oxK3fJbsBD9Hmh_!!0-item_pic.jpg',
    price: '59.00',
    brand: '浪莎官方旗舰店'
  },
  {
    id: 3,
    name: '金利来袜子男士纯棉中筒棉袜秋冬全棉防臭吸汗薄棉袜长袜秋季短袜',
    source: '//g-search3.alicdn.com/img/bao/uploaded/i4/i3/917226893/O1CN01voR4P820n2YZLrGIF_!!0-item_pic.jpg_460x460Q90.jpg_.webp',
    price: '49.00',
    brand: '金利来内衣旗舰店'
  },
  {
    id: 4,
    name: '【双十一】佳丽宝Kanebo连裤袜110D*3双装 日本进口保暖',
    source: '//g-search2.alicdn.com/img/bao/uploaded/i4/i4/2575956766/O1CN011zqsFX7RtJWOqMe_!!0-item_pic.jpg_460x460Q90.jpg_.webp',
    price: '129.00',
    brand: '佳丽宝官方旗舰店'
  },
  {
    id: 5,
    name: 'GU男装秋冬保暖短袜松紧口袜子(3双装) 柔软舒适短袜297434极优',
    source: '//g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/32888477/O1CN01ECV5vx2CUVvP9rtIM_!!0-saturn_solar.jpg_460x460Q90.jpg_.webp',
    price: '39.00',
    brand: 'gu官方旗舰店'
  },
  {
    id: 6,
    name: 'MONKI2018新款时尚女装舒适彩虹白色棉质袜子女 0382392',
    source: '//g-search1.alicdn.com/img/bao/uploaded/i4/i4/2668714578/O1CN011jglf4wT9348eli_!!0-item_pic.jpg',
    price: '39.00',
    brand: 'monki官方旗舰店'
  },
  {
    id: 7,
    name: '七匹狼袜子男纯棉秋季中筒袜 冬季防臭棉袜 吸汗黑色长袜长筒男袜',
    source: '//g-search1.alicdn.com/img/bao/uploaded/i4/i1/2257481247/O1CN011L5ALYUXOuXwZrX_!!2257481247.jpg',
    price: '129.00',
    brand: '佳丽宝官方旗舰店'
  },
  {
    id: 8,
    name: '【双十一】佳丽宝Kanebo连裤袜110D*3双装 日本进口保暖',
    source: '//g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i1/32888477/O1CN01ECV5vx2CUVvP9rtIM_!!0-saturn_solar.jpg_460x460Q90.jpg_.webp',
    price: '49.00',
    brand: '未完待续125810'
  }
]
export function getAllProduct () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 1000)
  })
}
