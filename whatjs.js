const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ["#84f542", "#ff2176", "#000000"];
      const circleArr = [];
      const maxCircle = 50;

      function Circle(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;

        this.draw = function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        };

        this.update = function() {
          if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
          }

          if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
          }

          this.x += this.dx;
          this.y += this.dy;

          this.draw();
        };
      }

      for (let i = 0; i < maxCircle; i++) {
        const radius = Math.random() * 30 + 10;
        const x = Math.random() * (innerWidth - radius * 2) + radius;
        const y = Math.random() * (innerHeight - radius * 2) + radius;
        const dx = (Math.random() - 0.5) * 10;
        const dy = (Math.random() - 0.5) * 10;
        const color = colors[Math.floor(Math.random() * colors.length)];

        circleArr.push(new Circle(x, y, radius, dx, dy, color));
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);

        for (let i = 0; i < circleArr.length; i++) {
          circleArr[i].update();
        }
      }

      animate();