<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1M LEGACY | Official Billboard</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@300;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <style>
        /* CSS: গ্রাফিক্স এবং এনিমেশন */
        :root {
            --primary: #00ffcc;
            --secondary: #0099ff;
            --bg: #050505;
        }

        body { 
            margin: 0; padding: 0; background: var(--bg); color: white; 
            font-family: 'Inter', sans-serif; overflow: hidden; height: 100vh;
        }

        /* প্রফেশনাল হেডার */
        #top-bar {
            position: fixed; top: 0; width: 100%;
            background: rgba(0, 0, 0, 0.9);
            border-bottom: 1px solid #1a1a1a;
            z-index: 2000; backdrop-filter: blur(15px);
        }

        .header-container {
            display: flex; justify-content: space-between; align-items: center;
            padding: 10px 30px; max-width: 1400px; margin: 0 auto;
        }

        /* হোভার ইফেক্ট: লেখার ওপর দিয়ে মাউস নিলে ছড়িয়ে যাবে */
        .hover-glow {
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            font-family: 'Orbitron', sans-serif;
            text-transform: uppercase;
        }

        .hover-glow:hover {
            color: var(--primary);
            text-shadow: 0 0 20px var(--primary), 0 0 40px var(--primary);
            letter-spacing: 12px; /* লেখা ছড়ানোর ইফেক্ট */
            transform: scale(1.05);
        }

        .brand-section h1 { margin: 0; font-size: 26px; letter-spacing: 4px; color: #fff; }
        .header-payment-info { font-size: 10px; color: #555; margin-top: 5px; letter-spacing: 1px; }

        .social-icons { display: flex; gap: 15px; flex: 1; }
        .social-icons a { color: #888; font-size: 18px; transition: 0.3s; }
        .social-icons a:hover { color: var(--primary); transform: translateY(-3px); }

        .right-panel { display: flex; align-items: center; gap: 20px; flex: 1; justify-content: flex-end; }
        .counter-box { text-align: right; font-size: 10px; color: #666; }
        .sold { color: #ff3e3e; font-weight: bold; }
        .avail { color: var(--primary); font-weight: bold; }

        .buy-now-btn {
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            color: #000; padding: 10px 20px; border-radius: 4px;
            font-weight: bold; text-decoration: none; font-size: 12px;
            box-shadow: 0 0 15px rgba(0, 255, 204, 0.3); transition: 0.4s;
        }
        .buy-now-btn:hover { box-shadow: 0 0 30px var(--primary); transform: translateY(-2px); }

        /* সাপোর্ট বাটন */
        .floating-wa {
            position: fixed; bottom: 25px; right: 25px;
            background: #25d366; color: white; padding: 12px 20px;
            border-radius: 50px; text-decoration: none; display: flex;
            align-items: center; gap: 10px; font-weight: bold; z-index: 3000;
            box-shadow: 0 10px 20px rgba(0,0,0,0.4); transition: 0.3s;
        }
        .floating-wa:hover { transform: scale(1.1); }

        /* পেমেন্ট মডাল */
        .modal {
            display: none; position: fixed; top: 50%; left: 50%;
            transform: translate(-50%, -50%); background: #0a0a0a;
            padding: 30px; border: 1px solid var(--primary); z-index: 4000;
            width: 90%; max-width: 450px; border-radius: 15px; text-align: center;
        }

        .payment-options { display: flex; gap: 15px; margin: 20px 0; }
        .pay-card {
            flex: 1; background: #111; padding: 15px; border-radius: 10px;
            border: 1px solid #222; transition: 0.3s;
        }
        .pay-card:hover { border-color: var(--primary); background: #151515; }
        .pay-card i { font-size: 24px; color: var(--primary); margin-bottom: 10px; }
        .pay-card h3 { font-size: 12px; margin: 10px 0; color: #fff; }
        .pay-card p { font-size: 10px; color: #777; word-break: break-all; min-height: 40px; }

        .mini-copy {
            background: #222; color: var(--primary); border: 1px solid #333; 
            padding: 6px 10px; font-size: 10px; cursor: pointer; border-radius: 4px; margin-top: 10px;
        }
        .mini-copy:hover { background: var(--primary); color: #000; }

        .confirm-btn {
            width: 100%; background: #25d366; color: white; border: none;
            padding: 12px; font-weight: bold; border-radius: 6px; cursor: pointer;
        }

        #overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.85); z-index: 3500; }
        
        canvas { display: block; background: #000; cursor: grab; }
        canvas:active { cursor: grabbing; }
    </style>
</head>
<body>

<div id="top-bar">
    <div class="header-container">
        <div class="social-icons">
            <a href="https://www.facebook.com/1MLegacyOfficial" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/1mlegacyofficial/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://x.com/MLegacyOfficial" target="_blank"><i class="fab fa-x-twitter"></i></a>
        </div>

        <div class="brand-section">
            <h1 class="hover-glow">1M LEGACY</h1>
            <div class="header-payment-info">
                <span><i class="fas fa-id-card"></i> UID: 912221034</span> | 
                <span><i class="fas fa-wallet"></i> USDT: TTapBkTqrDnz...</span>
            </div>
        </div>

        <div class="right-panel">
            <div class="counter-box">
                <div>SOLD: <span class="sold">0</span></div>
                <div>AVAIL: <span class="avail">1,000,000</span></div>
            </div>
            <a href="javascript:void(0)" class="buy-now-btn" onclick="openPayment()">BUY SPOT</a>
        </div>
    </div>
</div>

<a href="https://wa.me/8801576940717" class="floating-wa" target="_blank">
    <i class="fab fa-whatsapp"></i>
    <span>Support</span>
</a>

<div id="payment-modal" class="modal">
    <h2 class="hover-glow" style="font-size: 18px;">SELECT PAYMENT</h2>
    <p style="font-size: 11px; color: #666; margin-bottom: 20px;">Secure your 50x50 Pixel for 10 USDT</p>
    
    <div class="payment-options">
        <div class="pay-card">
            <i class="fas fa-id-badge"></i>
            <h3>Binance UID</h3>
            <p id="uid-val">912221034</p>
            <button class="mini-copy" onclick="copyText('912221034')">Copy UID</button>
        </div>

        <div class="pay-card">
            <i class="fas fa-shield-alt"></i>
            <h3>USDT (TRC20)</h3>
            <p id="addr-val">TTapBkTqrDnzHbWzek6wSBUTcJKFmR8Ws6</p>
            <button class="mini-copy" onclick="copyText('TTapBkTqrDnzHbWzek6wSBUTcJKFmR8Ws6')">Copy Address</button>
        </div>
    </div>

    <button class="confirm-btn" onclick="window.open('https://wa.me/8801576940717')">CONFIRM VIA WHATSAPP</button>
    <p onclick="closePayment()" style="color:#444; font-size:12px; margin-top:15px; cursor:pointer;">Close Window</p>
</div>

<div id="overlay" onclick="closePayment()"></div>
<canvas id="billboardCanvas"></canvas>

<script>
    // ১. পেমেন্ট ও মডাল লজিক
    function openPayment() { 
        document.getElementById('payment-modal').style.display = 'block'; 
        document.getElementById('overlay').style.display = 'block'; 
    }
    function closePayment() { 
        document.getElementById('payment-modal').style.display = 'none'; 
        document.getElementById('overlay').style.display = 'none'; 
    }
    function copyText(text) {
        navigator.clipboard.writeText(text);
        alert("Copied to Clipboard!");
    }

    // ২. ক্যানভাস ইঞ্জিন (১ মিলিয়ন গ্রিড)
    const canvas = document.getElementById('billboardCanvas');
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width; canvas.height = height;

    const totalCols = 1000; const totalRows = 1000; const blockSize = 50;
    let cameraX = (totalCols * blockSize) / 2; // শুরুতে মাঝখানে থাকবে
    let cameraY = (totalRows * blockSize) / 2;
    let zoom = 0.15;

    function draw() {
        ctx.clearRect(0, 0, width, height);
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.scale(zoom, zoom);
        ctx.translate(-cameraX, -cameraY);

        // গ্রিড লাইন ডিজাইন (গ্রাফিক্স ইম্প্রুভমেন্ট)
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 1;

        const startCol = Math.max(0, Math.floor((cameraX - (width/2)/zoom) / blockSize));
        const endCol = Math.min(totalCols, Math.ceil((cameraX + (width/2)/zoom) / blockSize));
        const startRow = Math.max(0, Math.floor((cameraY - (height/2)/zoom) / blockSize));
        const endRow = Math.min(totalRows, Math.ceil((cameraY + (height/2)/zoom) / blockSize));

        for (let i = startCol; i < endCol; i++) {
            for (let j = startRow; j < endRow; j++) {
                ctx.strokeRect(i * blockSize, j * blockSize, blockSize, blockSize);
            }
        }
        ctx.restore();
        requestAnimationFrame(draw);
    }

    // ৩. ইন্টারেকশন (Drag & Zoom)
    let isDragging = false; let lastX, lastY;
    canvas.onmousedown = (e) => { isDragging = true; lastX = e.clientX; lastY = e.clientY; };
    window.onmouseup = () => isDragging = false;
    window.onmousemove = (e) => {
        if (!isDragging) return;
        cameraX -= (e.clientX - lastX) / zoom;
        cameraY -= (e.clientY - lastY) / zoom;
        lastX = e.clientX; lastY = e.clientY;
    };
    canvas.onwheel = (e) => {
        e.preventDefault();
        const factor = e.deltaY < 0 ? 1.1 : 0.9;
        zoom = Math.min(Math.max(0.01, zoom * factor), 5);
    };

    // মোবাইল টাচ সাপোর্ট
    canvas.ontouchstart = (e) => { lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; isDragging = true; };
    canvas.ontouchend = () => isDragging = false;
    canvas.ontouchmove = (e) => {
        if (!isDragging) return;
        cameraX -= (e.touches[0].clientX - lastX) / zoom;
        cameraY -= (e.touches[0].clientY - lastY) / zoom;
        lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
    };

    window.onresize = () => {
        width = window.innerWidth; height = window.innerHeight;
        canvas.width = width; canvas.height = height;
    };

    draw();
</script>

</body>
</html>
