module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        'postcss-rem-to-responsive-pixel': {
            // 需要实现的对应比例是：1rem = 20px = 40rpx
            // rootValue 中的值表示 1rem = 40rpx
            rootValue: 40,
            // 默认所有属性都转化
            propList: ['*'],
            // 转化的单位,可以变成 px / rpx
            transformUnit: 'rpx',
        },
    },
}