
import { useState } from "react";

const banAn = [
  { id: 1, ten: "Bàn 01", khu: "Tầng trệt", trangThai: "Đang phục vụ", mau: "bg-amber-100 text-amber-800" },
  { id: 2, ten: "Bàn 02", khu: "Tầng trệt", trangThai: "Trống", mau: "bg-green-100 text-green-700" },
  { id: 3, ten: "Bàn 03", khu: "Tầng trệt", trangThai: "Đã đặt", mau: "bg-blue-100 text-blue-700" },
  { id: 4, ten: "Bàn 04", khu: "Tầng 1", trangThai: "Trống", mau: "bg-green-100 text-green-700" },
  { id: 5, ten: "Bàn 05", khu: "Tầng 1", trangThai: "Đang phục vụ", mau: "bg-amber-100 text-amber-800" },
  { id: 6, ten: "Bàn 06", khu: "VIP", trangThai: "Trống", mau: "bg-green-100 text-green-700" },
];

const donHang = [
  { ma: "#DH001", khach: "Nguyễn Văn An", ban: "Bàn 01", tien: "350.000đ", tt: "Đang phục vụ" },
  { ma: "#DH002", khach: "Trần Minh Anh", ban: "Bàn 05", tien: "520.000đ", tt: "Chờ thanh toán" },
  { ma: "#DH003", khach: "Lê Hoàng Nam", ban: "Bàn 03", tien: "180.000đ", tt: "Đang chuẩn bị" },
];

export default function App() {
  const [tab, setTab] = useState("Tổng quan");
  const [tuKhoa, setTuKhoa] = useState("");
  const [thongBao, setThongBao] = useState("");

  const menu = [
    { ten: "Tổng quan", icon: "📊" },
    { ten: "Quản lý bàn", icon: "🪑" },
    { ten: "Quản lý món ăn", icon: "🍲" },
    { ten: "Đơn hàng", icon: "🧾" },
    { ten: "Nhân viên", icon: "👥" },
    { ten: "Đặt bàn", icon: "📅" },
    { ten: "Kho nguyên liệu", icon: "📦" },
    { ten: "Báo cáo doanh thu", icon: "📈" },
    { ten: "Cài đặt", icon: "⚙️" },
  ];

  const banLoc = banAn.filter((ban) =>
    ban.ten.toLowerCase().includes(tuKhoa.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#403329] md:flex">
      {/* Sidebar */}
      <aside className="w-full shrink-0 bg-[#493326] p-5 text-white md:min-h-screen md:w-64">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c8a97e] text-2xl">
            🍽️
          </div>
          <div>
            <h1 className="text-lg font-bold">Cơm Việt</h1>
            <p className="text-xs text-amber-200">Quản lý nhà hàng</p>
          </div>
        </div>

        <p className="mb-3 text-xs uppercase tracking-widest text-amber-200">
          MENU CHÍNH
        </p>

        <nav className="flex flex-wrap gap-2 md:flex-col">
          {menu.map((item) => (
            <button
              key={item.ten}
              onClick={() => {
                setTab(item.ten);
                setThongBao("");
              }}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                tab === item.ten
                  ? "bg-[#c8a97e] font-semibold text-[#493326]"
                  : "text-stone-200 hover:bg-white/10"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.ten}</span>
            </button>
          ))}
        </nav>

        <div className="mt-8 rounded-xl border border-white/15 p-4">
          <p className="text-sm font-semibold">Xin chào, Admin!</p>
          <p className="mt-1 text-xs text-stone-300">
            Chúc bạn một ngày làm việc hiệu quả.
          </p>
        </div>
      </aside>

      {/* Nội dung */}
      <main className="min-w-0 flex-1 p-4 md:p-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-stone-500">Trang quản trị / {tab}</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">{tab}</h2>
            <p className="mt-2 text-sm text-stone-500">
              Theo dõi và quản lý hoạt động nhà hàng.
            </p>
          </div>
          <div className="rounded-xl border border-[#e0d6c8] bg-white px-4 py-3">
            <p className="text-sm font-semibold">👤 Quản trị viên</p>
            <p className="text-xs text-stone-500">Hệ thống quản lý</p>
          </div>
        </header>

        {thongBao && (
          <div className="mb-5 rounded-xl bg-green-100 p-4 text-green-800">
            {thongBao}
          </div>
        )}

        {tab === "Tổng quan" && (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { ten: "Doanh thu hôm nay", so: "8.500.000đ", icon: "💰", phu: "+12% so với hôm qua" },
                { ten: "Đơn hàng", so: "48", icon: "🧾", phu: "Đơn hàng trong ngày" },
                { ten: "Bàn đang phục vụ", so: "12", icon: "🪑", phu: "Trong tổng số 20 bàn" },
                { ten: "Khách đặt bàn", so: "16", icon: "👥", phu: "Lịch đặt trong ngày" },
              ].map((item) => (
                <div
                  key={item.ten}
                  className="rounded-2xl border border-[#e9dfd2] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-stone-500">{item.ten}</p>
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <p className="mt-4 text-2xl font-bold">{item.so}</p>
                  <p className="mt-2 text-xs text-stone-500">{item.phu}</p>
                </div>
              ))}
            </div>

            <section className="mt-8 rounded-2xl border border-[#e9dfd2] bg-white p-5 shadow-sm">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold">Sơ đồ bàn ăn</h3>
                  <p className="mt-1 text-sm text-stone-500">
                    Trạng thái bàn tại nhà hàng
                  </p>
                </div>
                <button
                  onClick={() => setTab("Quản lý bàn")}
                  className="rounded-lg bg-[#493326] px-4 py-2 text-sm text-white hover:bg-[#654735]"
                >
                  Xem tất cả →
                </button>
              </div>

              <div className="mb-5 flex flex-wrap gap-4 text-xs">
                <span>🟢 Trống</span>
                <span>🟠 Đang phục vụ</span>
                <span>🔵 Đã đặt</span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
                {banAn.map((ban) => (
                  <button
                    key={ban.id}
                    onClick={() => setThongBao(`${ban.ten}: ${ban.trangThai}`)}
                    className="rounded-xl border border-[#e9dfd2] p-4 text-center transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-3 text-3xl">🪑</div>
                    <p className="font-bold">{ban.ten}</p>
                    <p className="my-2 text-xs text-stone-500">{ban.khu}</p>
                    <span className={`inline-block rounded-full px-2 py-1 text-xs ${ban.mau}`}>
                      {ban.trangThai}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-8 rounded-2xl border border-[#e9dfd2] bg-white p-5 shadow-sm">
              <h3 className="mb-5 text-lg font-bold">Đơn hàng gần đây</h3>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <thead className="bg-[#f5f1ea] text-stone-600">
                    <tr>
                      <th className="rounded-l-lg p-3">Mã đơn</th>
                      <th className="p-3">Khách hàng</th>
                      <th className="p-3">Bàn</th>
                      <th className="p-3">Tổng tiền</th>
                      <th className="rounded-r-lg p-3">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donHang.map((don) => (
                      <tr key={don.ma} className="border-b border-stone-100">
                        <td className="p-3 font-semibold">{don.ma}</td>
                        <td className="p-3">{don.khach}</td>
                        <td className="p-3">{don.ban}</td>
                        <td className="p-3 font-semibold">{don.tien}</td>
                        <td className="p-3">
                          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-800">
                            {don.tt}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {tab === "Quản lý bàn" && (
          <section className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-lg font-bold">Danh sách bàn ăn</h3>
              <input
                value={tuKhoa}
                onChange={(e) => setTuKhoa(e.target.value)}
                placeholder="Tìm theo tên bàn..."
                className="rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-[#a67c52]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {banLoc.map((ban) => (
                <div key={ban.id} className="rounded-xl border border-stone-200 p-5">
                  <div className="text-3xl">🪑</div>
                  <h4 className="mt-3 font-bold">{ban.ten}</h4>
                  <p className="my-2 text-sm text-stone-500">{ban.khu}</p>
                  <span className={`rounded-full px-3 py-1 text-xs ${ban.mau}`}>
                    {ban.trangThai}
                  </span>
                </div>
              ))}
              {banLoc.length === 0 && (
                <p className="text-sm text-stone-500">Không tìm thấy bàn phù hợp.</p>
              )}
            </div>
          </section>
        )}

        {tab !== "Tổng quan" && tab !== "Quản lý bàn" && (
          <section className="rounded-2xl border border-[#e9dfd2] bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">
              {menu.find((item) => item.ten === tab)?.icon}
            </div>
            <h3 className="mt-4 text-xl font-bold">{tab}</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-stone-500">
              Đây là giao diện thử nghiệm. Bạn có thể xây dựng chức năng
              thực tế cho mục này ở các bước tiếp theo.
            </p>
            <button
              onClick={() => setTab("Tổng quan")}
              className="mt-5 rounded-xl bg-[#493326] px-5 py-3 text-white hover:bg-[#654735]"
            >
              ← Quay lại tổng quan
            </button>
          </section>
        )}

        <footer className="mt-8 text-center text-xs text-stone-500">
          © 2026 Cơm Việt — Website quản lý nhà hàng
        </footer>
      </main>
    </div>
  );
}
