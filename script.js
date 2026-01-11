// আপনার ফায়ারবেস কনফিগ কোড সরাসরি নিচে বসানো হলো
const firebaseConfig = {
  apiKey: "AIzaSyAu60S1HSCBT4W2bMs80EJgIQqeuDAbhuU",
  authDomain: "mybillboard-c0ee4.firebaseapp.com",
  databaseURL: "https://mybillboard-c0ee4-default-rtdb.firebaseio.com/",
  projectId: "mybillboard-c0ee4",
  storageBucket: "mybillboard-c0ee4.firebasestorage.app",
  messagingSenderId: "768914352520",
  appId: "1:768914352520:web:6c63e367d50fbdcec2b23d",
  measurementId: "G-W0JYRV1SLD"
};

// ডাটাবেস সেটআপ
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const grid = document.getElementById('grid-container');
let scale = 0.4;

// ডাটাবেস থেকে তথ্য নিয়ে পিক্সেল সাজানো
db.ref('pixels').on('value', (snapshot) => {
    grid.innerHTML = '';
    let count = 0;
    snapshot.forEach((child) => {
        const val = child.val();
        if(val.status === 'approved') {
            const el = document.createElement('a');
            el.className = 'pixel-slot';
            el.href = val.link;
            el.target = "_blank";
            el.style.left = val.x + 'px';
            el.style.top = val.y + 'px';
            el.style.backgroundImage = `url(${val.logo})`;
            grid.appendChild(el);
            count++;
        }
    });
    document.getElementById('sold-count').innerText = count;
});

// ডাবল ক্লিক করলে কেনার বক্স আসবে
grid.addEventListener('dblclick', (e) => {
    const rect = grid.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / scale) / 50) * 50;
    const y = Math.floor(((e.clientY - rect.top) / scale) / 50) * 50;
    window.selectedSpot = { x, y, id: `R${y/50 + 1}_C${x/50 + 1}` };
    document.getElementById('spotIDDisplay').innerText = "SELECTED: SPOT #" + window.selectedSpot.id;
    document.getElementById('selectionModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

// পিক্সেল কেনার আবেদন জমা দেওয়া
function submitRequest() {
    const link = document.getElementById('custLink').value;
    const logo = document.getElementById('custLogo').value;
    if(!link || !logo) return alert("দয়া করে সব ঘর পূরণ করুন!");
    
    db.ref('pixels/' + window.selectedSpot.id).set({
        ...window.selectedSpot,
        link: link,
        logo: logo,
        status: 'pending'
    }).then(() => {
        alert("আবেদন সফল! পেমেন্টের জন্য হোয়াটসঅ্যাপে যোগাযোগ করুন।");
        window.open(`https://wa.me/8801576940717?text=Payment for Spot #${window.selectedSpot.id}`);
        closeModals();
    });
}

function closeModals() {
    document.getElementById('selectionModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// মাউস জুম কন্ট্রোল
let v = document.getElementById('viewport');
v.addEventListener('wheel', e => {
    e.preventDefault();
    scale = Math.min(Math.max(0.05, scale + (e.deltaY > 0 ? -0.05 : 0.05)), 2);
    grid.style.transform = `scale(${scale})`;
}, {passive: false});
grid.style.transform = `scale(${scale})`;
