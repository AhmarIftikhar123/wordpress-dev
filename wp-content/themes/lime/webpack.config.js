const path = require("path"); // Core module for working with file paths
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // Optional for CSS minification
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Import the plugin
const JS_DIR = "./assets/src/js/";
const entry = {
  main: JS_DIR + "main.js",
  editor: JS_DIR + "editor.js",
};
module.exports = {
  entry: entry, // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "[name]bundle.js", // Output JavaScript file
  },
  mode: "production", // Set mode to 'production' for optimized builds
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to JavaScript files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Transpile JavaScript with Babel
        },
      },
      {
        test: /\.scss$/, // Apply this rule to CSS files
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif|ico)$/, // Match image files
        use: {
          loader: "file-loader", // Use file-loader to process
          options: {
            name: "[name].[hash].[ext]", // Specify the output file name pattern
            outputPath: "images/", // Define the output directory for images
            publicPath:
              process.env.NODE_ENV === "production" ? "../" : "../../", // Set the public path dynamically based on environment
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "mini_css/[name].css", // Output CSS file
    }),
    new CleanWebpackPlugin(), // Add the CleanWebpackPlugin to the plugins array
  ],
  optimization: {
    minimize: true, // Enable optimization
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }), // Minify JavaScript
      new CssMinimizerPlugin(), // Minify CSS (optional, recommended)
    ],
  },
  externals: {
    jquery: "JQuery",
  },
};
