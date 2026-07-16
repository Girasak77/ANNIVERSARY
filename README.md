# เว็บไซต์เซอร์ไพรส์วันครบรอบ

เว็บไซต์ Static แบบ Mobile First ทำด้วย HTML, CSS และ Vanilla JavaScript เปิดใช้งานได้ทันทีโดยไม่ต้องติดตั้งแพ็กเกจหรือใช้ Backend

## 1. วิธีเปิดเว็บไซต์

ดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดใน Browser ได้ทันที หรือใช้ส่วนเสริม Live Server ใน VS Code หากต้องการทดสอบผ่าน local server

โครงสร้างไฟล์หลัก:

```text
index.html
css/style.css
js/script.js
imge/
```

## 2. วิธีเปลี่ยนชื่อแฟนและชื่อผู้จัดทำ

เปิด `js/script.js` แล้วแก้ค่าด้านบนของไฟล์:

```javascript
const CONFIG = {
  partnerName: "หนู",
  yourName: "พี่"
};
```

## 3. วิธีเปลี่ยนวันที่เริ่มคบกัน

แก้ `anniversaryDate` ใน `CONFIG` โดยใช้รูปแบบ `ปี-เดือน-วัน`:

```javascript
anniversaryDate: "2026-02-17"
```

ตัวนับปี เดือน วัน และจำนวนวันรวมจะคำนวณตามวันที่ปัจจุบันโดยอัตโนมัติ

## 4. วิธีเปลี่ยนรูปจิ๊กซอว์

นำรูปไปวางใน `imge/` แล้วแก้ path และตำแหน่งที่ต้องการโฟกัส:

```javascript
puzzleImage: "imge/01-puzzle.jpg",
puzzleImagePosition: "50% 58%"
```

เกมรองรับรูปแนวตั้งและแนวนอนโดยไม่ยืดภาพ ค่า `puzzleImagePosition` ช่วยเลื่อนจุดที่ต้องการให้เห็นภายในกรอบสี่เหลี่ยม

## 5. วิธีเปลี่ยนรูปและข้อความ Timeline

แก้ Array `memories` ใน `js/script.js` แต่ละรายการประกอบด้วย `date`, `title`, `description`, `image` และ `imagePosition` สามารถเพิ่มหรือลดรายการได้ตามต้องการ

```javascript
{
  date: "1 มกราคม 2024",
  title: "วันแรกของเรา",
  description: "ข้อความความทรงจำ",
  image: "imge/02-memory.jpg",
  imagePosition: "50% 35%"
}
```

## 6. วิธีเพิ่มเพลง

นำไฟล์เพลงชื่อ `love-song.mp3` ไปวางใน `imge/` หรือแก้ path ใน `CONFIG`:

```javascript
backgroundMusic: "imge/love-song.mp3"
```

ควรใช้ไฟล์ที่มีสิทธิ์ใช้งาน และบีบอัดไฟล์ให้เหมาะกับการเปิดผ่านเว็บไซต์

## 7. วิธีเปลี่ยน Quiz เหตุผลที่รัก และข้อความจดหมาย

- แก้ Quiz ที่ Array `quizQuestions` โดยค่า `correctAnswer` เริ่มนับจาก 0
- แก้ Card ที่ Array `loveReasons`
- แก้จดหมายที่ตัวแปร `letterMessage`
- เปลี่ยนรูปของขวัญสุดท้ายด้วย `finalGiftImage` ใน `CONFIG`

ข้อมูลที่แก้บ่อยทั้งหมดอยู่ช่วงบนของ `js/script.js` และมี Comment แยกไว้ชัดเจน

## 8. วิธี Deploy ไป GitHub Pages

1. สร้าง Repository ใหม่บน GitHub
2. อัปโหลดไฟล์และโฟลเดอร์ทั้งหมดโดยให้ `index.html` อยู่ระดับบนสุด
3. เปิดหน้า **Settings → Pages**
4. ที่ **Build and deployment** เลือก **Deploy from a branch**
5. เลือก branch `main` และโฟลเดอร์ `/ (root)` แล้วกด Save
6. รอสักครู่ GitHub จะแสดง URL ของเว็บไซต์

เว็บไซต์นี้ใช้ relative path จึง Deploy บน GitHub Pages, Netlify และ Vercel ได้โดยไม่ต้องแก้โค้ด

## 9. ข้อจำกัดเรื่องการเล่นเพลงอัตโนมัติ

Browser ส่วนใหญ่ไม่อนุญาตให้เว็บไซต์เล่นเสียงก่อนผู้ใช้มี Interaction เพลงจึงเริ่มเมื่อกดปุ่ม **เริ่มเปิดความทรงจำ** หรือปุ่มเพลงเท่านั้น หากไม่มีไฟล์เพลง เว็บไซต์ส่วนอื่นจะยังทำงานได้ตามปกติ

## หมายเหตุ

เว็บไซต์ใช้รูปจริงจากโฟลเดอร์ `imge` หากไฟล์ใดหายจะใช้ภาพสำรองแทนโดยไม่ทำให้ระบบหยุดทำงาน เว็บไซต์รองรับ Keyboard, Touch Screen, การปิด Modal ด้วยปุ่ม Escape และการตั้งค่า `prefers-reduced-motion`
