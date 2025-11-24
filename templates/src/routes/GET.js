export default (req, res) => {
  res.json({ 
    message: "🎉 THIZ.js is running!",
    routes: {
      home: "/",
      health: "/health"
    },
    docs: "https://github.com/santhosh-2504/thizjs-express"
  });
};