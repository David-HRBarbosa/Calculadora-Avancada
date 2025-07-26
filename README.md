* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', sans-serif;
}

body {
  background-color: #111;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  background: #1e1e1e;
  border-radius: 15px;
  padding: 20px;
  width: 320px;
  box-shadow: 0 0 20px rgba(0,0,0,0.7);
}

.display {
  background: #000;
  color: #0f0;
  font-size: 2.2em;
  padding: 20px;
  border-radius: 10px;
  text-align: right;
  overflow-x: auto;
  margin-bottom: 15px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.btn {
  padding: 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 10px;
  background: #2d2d2d;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
}

.btn:hover {
  background: #444;
}

.operator {
  background: #ff9500;
  color: #000;
}

.equal {
  background: #34c759;
  color: #000;
  grid-column: span 1;
}

.action {
  background: #ff3b30;
}
