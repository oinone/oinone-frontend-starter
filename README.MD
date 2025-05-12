### 快速上手

```
# 初始化安装依赖
npm i

# 清理所有依赖
npm run clean

# 开发模式启动
npm run dev

# 构建生产用的包
npm run build

```

##### 修改开发模式后端 api 地址的 2 种方法

1. `适合生产环境使用`，将.env 里面的 API_BASE_URL 改为自己需要配置的地址
2. `适合开发环境使用` vue.config.js 内 devServer.proxy.pamirs.target 的值修改为自己需要配置的地址

> 方法 1 的优先级高于方法 2，如果想要方法 2 生效，需要把方法 1 的配置删除

### 静态资源配置

```
├── public
└────static.zip
```

解压 static.zip 到 public 目录下

**建议将静态资源文件上传在 oss，然后将 .env 里面的`STATIC_IMG` 改成 oss 的地址**

### 目录结构

```
├── public 发布用的目录，index.html入口文件将在这里
│
├── src 源代码
│   └── main.ts 应用入口文件 这里会注册providers/application.ts
├── .env 启动的环境变量，后端api的请求地址在这里
├── package.json 包描述文件
├── tsconfig.json ts配置文件，可配置语法校验
└── vue.config.js vue的配置文件，里面可以配置webpack参数和开发模式的后端api请求地址

```
