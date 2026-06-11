import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './conponent/header'
import TodoList from './conponent/TodoList'
import TodoItems from './conponent/TodoItems'
import TodoForm from './conponent/TodoForm'
import TodoSlot from './conponent/TodoStart'
// import Count from './conponent/count'
// function UserProfile() {
//   return (
//     <div className="profile">
//       <h1> Hồ sơ cá nhân</h1>
//       <img src="Photo.jpg" alt="Profile Image" />
//       <table>
//         <tbody>
//           <tr>
//             <td>Họ và tên:</td>
//             <td>Trần Đức Cơ</td>
//           </tr>
//           <tr>
//             <td>Email:</td>
//             <td>tranducco@gmail.com</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
// function ProductInfo() {
//   return (
//     <div className="product">
//       <h2>iPhone 15</h2>
//       <p className="price">25.000.000đ</p>
//       <ul>
//         <li>Màn hình: 6.1 inch</li>
//         <li>Camera: 48MP</li>
//         <li>Pin: 3349 mAh</li>
//       </ul>
//       <button>Mua ngay</button>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div>
//       <h1>Trần Đức Cơ</h1> 
//       <p>Hôm nay là ngày đẹp trời</p>
//       <ul>
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>JavaScript</li>
//         <li>React</li>
//       </ul>
    
//       {/* <hr />
//       <UserProfile />
//       <hr />
//       <ProductInfo /> */}
//     </div>
//   );
// }
// export default App;
// function LifecycleDemo() {
//     console.log("1️⃣ Component được gọi!");
    
//     return (
//         <div style={{ padding: "20px", border: "2px solid #3498db" }}>
//             <h2>Lifecycle Demo</h2>
//             <p>Mở Console (F12) để xem log</p>
//             <p>Component này chỉ render MỘT lần</p>
//         </div>
//     );
// }
// function BadCounter() {
//     let count = 0;  // ← Biến bình thường!
    
//     function handleClick() {
//         count = count + 1;
//         console.log("Count:", count);  // Console: 1, 2, 3...
//         // Nhưng UI KHÔNG cập nhật!
//     }
    
//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>❌ Counter "tệ" (dùng biến thường)</h2>
//             <p>Bộ đếm: {count}</p>
//             <button onClick={handleClick}>Tăng (+1)</button>
//             <p style={{ color: "red" }}>
//                 ⚠️ Nhấn nút → Console tăng, nhưng số trên màn hình KHÔNG đổi!
//             </p>
//         </div>
//     );
// }

// function GoodCounter() {
//     const [count, setCount] = useState(0);  // ← useState!
    
//     function handleClick() {
//         setCount(count + 1);  // React biết cần re-render!
//     }
    
//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>✅ Counter "tốt" (dùng useState)</h2>
//             <p>Bộ đếm: {count}</p>
//             <button onClick={handleClick}>Tăng (+1)</button>
//             <p style={{ color: "green" }}>
//                 ✅ Nhấn nút → Số trên màn hình CẬP NHẬT!
//             </p>
//         </div>
//     );
// }
// function FlowDemo() {
//     console.log("🔄 Component render!");
    
//     const [step, setStep] = useState(1);
    
//     return (
//         <div style={{ padding: "20px" }}>
//             <h2>Luồng hoạt động</h2>
//             <p>Bước hiện tại: {step}</p>
            
//             <button onClick={() => setStep(step + 1)}>
//                 Bước tiếp theo →
//             </button>
            
//             <button onClick={() => setStep(1)}>
//                 Quay lại đầu
//             </button>
            
//             <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
//                 {step === 1 && <p>👋 Bước 1: Xin chào!</p>}
//                 {step === 2 && <p>📖 Bước 2: Đang học React</p>}
//                 {step === 3 && <p>🎯 Bước 3: Hiểu useState</p>}
//                 {step === 4 && <p>🎉 Bước 4: Hoàn thành!</p>}
//             </div>
//         </div>
//     );
// }
// function SimpleVariables() {
//     // Các biến JavaScript
//     const ten = "Nguyễn Văn Minh";
//     const tuoi = 20;
//     const laSinhVien = true;
//     const monHoc = ["HTML", "CSS", "JS", "React"];
    
//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>Xin chào {ten}!</h1>
//             <p>Tuổi: {tuoi}</p>
//             <p>Năm sau: {tuoi + 1}</p>
//             <p>Sinh viên: {laSinhVien ? "Có" : "Không"}</p>
            
//             <h2>Môn học yêu thích:</h2>
//             <p>{monHoc.join(", ")}</p>
//         </div>
//     );
// }
// function Chanllege21(){
//     const name = "Trần Đức Cơ";
//     const age = 22;
//     const hometown = "Hà Nội";
//     const currentHour = new Date().getHours();
//     const greeting = currentHour < 12 ? "Chào buổi sáng" :currentHour<18 ?"Chào buổi chiều":"Chào buổi tối";
//     const cannang = 50;
//     const chieucao = 1.65;
//     const bmi = cannang / (chieucao * chieucao);
//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>{greeting}, tôi tên là {name}!</h1>
//             <p>Tuổi: {age+1}</p>
//             <p>Quê quán: {hometown}</p>
//             <p>Chỉ số BMI của tôi là: {bmi.toFixed(2)}</p>
//         </div>
//     )
// }
// function Chanllege22(){
//   const Online = true;
//   const IsLoggedIn = true;
//   const stock = 5;
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Challenge 2.2</h1>
//       <p>Trạng thái {Online ? "🟢 Online" : "🔴 Offline"}</p>
//       <p>{IsLoggedIn ? "✅ Có" : "❌ Không"}</p>
//       {stock === 0 ? "❌ Hết hàng" : `✅ Còn ${stock} sản phẩm`}
//     </div>
//   );
// }
// function ListRendering() {
//     const fruits = ["Táo", "Chuối", "Cam", "Nho"];
    
//     const students = [
//         { id: 1, name: "Minh", age: 20 },
//         { id: 2, name: "An", age: 21 },
//         { id: 3, name: "Linh", age: 19 }
//     ];
    
//     return (
//         <div style={{ color: "red",padding: "20px" }}>
//             <h2> Danh sách trái cây</h2>
//             <ul>
//                 {fruits.map((fruit, index) => (
//                     <li key={index}>{fruit}</li>
            
//                 ))}
//             </ul>
            
//             <h2>Danh sách sinh viên</h2>
//             <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                 <thead>
//                     <tr style={{ background: "#f0f0f0" }}>
//                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
//                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên</th>
//                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tuổi</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map((student, index) => (
//                         <tr key={student.id}>
//                             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{index + 1}</td>
//                             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.name}</td>
//                             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{student.age}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
// function Chanllege23() {
//     const products= [
//       { id: 1, name: "giày air", price: 2500000, inStock: true },
//       { id: 2, name: "áo thun", price: 150000, inStock: false },
//       { id: 3, name: "quần jean", price: 500000, inStock: true },
//       { id: 4, name: "mũ lưỡi trai", price: 200000, inStock: true},
//       { id: 5, name: "đồng hồ", price: 1200000, inStock: false }
//     ];
//     const totalPrice = products.reduce((sum, item) => sum + item.price, 0);
//     return(
//         <div style={{ padding: "20px" }}>
//             <h2>Danh sách sản phẩm</h2>
//             <table style={{ width: "100%", borderCollapse: "collapse" ,color: product.price > 1000000 ? "red":"white"}}>
//                 <thead>
//                     <tr style={{ background: "#f0f0f0" }}>
//                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
//                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên sản phẩm</th>
//                         <th style={{ border: "1px solid #ddd", padding: "8px" }}>Giá</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map((product) => (
//                         <tr key={product.id}>
//                             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.id}</td>
//                             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
//                             <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.price}đ</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
            
//         </div>
//     )
//   }
// function TheHocSinh (ten, tuoi, lop) {
//     return {
//         <div>
//             <h2>Họ tên: {ten}</h2>
//             <p>Tuổi: {tuoi}</p>
//             <p>Lớp: {lop}</p>
//         </div>
//     }
// }


function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Hoc React", completed: false },
        { id: 2, text: "Đi chợ", completed: true }
    ]);
    const addTodo = (newtodo) => {
        setTodos([...todos, newtodo]);
    };
    return (
        <div>
            <TodoForm />
            <TodoList todos={todos} />
            <TodoStart/>
            <

        </div>
        );
}
export default App;

