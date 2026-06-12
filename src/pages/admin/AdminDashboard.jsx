import { useEffect, useState } from "react";
import axios from "axios";
import { supabase } from "../../lib/supabase";
import { Check, X, Trash2, LogOut, Sparkles } from "lucide-react";
import DefaultAvatar from "../../assets/icons/default-avatar.png";
const API_URL = import.meta.env.VITE_URL;

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const fetchTestimonials = async () => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const response = await axios.get(`${API_URL}/admin/testimonials`, {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      setTestimonials(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        await axios.get(`${API_URL}/admin/testimonials`, {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        fetchTestimonials();
      } catch (err) {
        window.location.href = "/";
      } finally {
        setCheckingAdmin(false);
      }
    };

    checkAdmin();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });

    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const approveTestimonial = async (id) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      await axios.patch(
        `${API_URL}/admin/testimonials/${id}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        },
      );
      showMessage("success", "Testimoni berhasil disetujui");
      fetchTestimonials();
    } catch {
      showMessage("error", "Gagal menyetujui testimoni");
    }
  };

  const rejectTestimonial = async (id) => {
    try {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      await axios.patch(
        `${API_URL}/admin/testimonials/${id}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.access_token}`,
          },
        },
      );
      showMessage("success", "Testimoni berhasil ditolak");
      fetchTestimonials();
    } catch (error) {
      showMessage("error", "Gagal menolak testimoni");
    }
  };

  const deleteTestimonial = async (id) => {
    try {


      const {
        data: { session },
      } = await supabase.auth.getSession();

      await axios.delete(`${API_URL}/admin/testimonials/${id}`, {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      showMessage("success", "Testimoni berhasil dihapus");
      fetchTestimonials();
    } catch (error) {
      showMessage("error", "Gagal menghapus testimoni");
    }
  };

  if (checkingAdmin || loading) {
    return <div className="p-10">Loading...</div>;
  }
  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-b
      from-[#FAF7F4]
      to-white
      p-6 md:p-10
    "
    >
      {/* Header */}
      <div
        className="
        flex flex-col md:flex-row
        md:items-center
        md:justify-between
        gap-5
        mb-10
      "
      >
        <div>
          <div
            className="
            inline-flex items-center gap-2
            bg-white
            border border-[#EFE7E1]
            rounded-full
            px-4 py-2
            shadow-sm
          "
          >
            <Sparkles size={14} className="text-[#E58B63]" />

            <span className="text-sm text-[#C9845E]">Admin Dashboard</span>
          </div>

          <h1
            className="
            mt-4
            text-4xl
            font-bold
            text-[#1B1B1B]
          "
          >
            Testimoni
            <span
              className="
              ml-2
              bg-gradient-to-r
              from-[#FFB36B]
              via-[#FF8B5A]
              to-[#FF6A5B]
              bg-clip-text
              text-transparent
            "
            >
              Management
            </span>
          </h1>

          <p className="text-gray-500 mt-2">
            Kelola seluruh testimoni pelanggan.
          </p>
        </div>

        <button
          onClick={logout}
          className="
          flex items-center gap-2
          px-5 py-3
          rounded-xl
          border border-red-200
          bg-white
          text-red-500
          hover:bg-red-50
          transition-all
        "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Stats */}
      {message && (
        <div
          className={`
      mb-6
      rounded-2xl
      px-5 py-4
      border
      ${
        message.type === "success"
          ? "bg-[#FFF8F3] border-[#FFD9C7] text-[#C9845E]"
          : "bg-red-50 border-red-200 text-red-600"
      }
    `}
        >
          {message.text}
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div
          className="
          bg-white
          rounded-3xl
          border border-[#F2ECE7]
          p-6
          shadow-sm
        "
        >
          <p className="text-gray-500 text-sm">Total Testimoni</p>

          <h2 className="text-3xl font-bold mt-2">{testimonials.length}</h2>
        </div>

        <div
          className="
          bg-white
          rounded-3xl
          border border-[#F2ECE7]
          p-6
          shadow-sm
        "
        >
          <p className="text-gray-500 text-sm">Approved</p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {testimonials.filter((t) => t.status === "approved").length}
          </h2>
        </div>

        <div
          className="
          bg-white
          rounded-3xl
          border border-[#F2ECE7]
          p-6
          shadow-sm
        "
        >
          <p className="text-gray-500 text-sm">Pending</p>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {testimonials.filter((t) => t.status === "pending").length}
          </h2>
        </div>
      </div>

      {/* Table */}
      <div
        className="
        bg-white/90
        backdrop-blur-xl
        border border-[#F2ECE7]
        rounded-[32px]
        overflow-hidden
        shadow-[0_20px_60px_rgba(0,0,0,0.05)]
      "
      >
        <div className="md:hidden space-y-4 p-4">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="
        bg-white
        border border-[#F2ECE7]
        rounded-2xl
        p-4
        shadow-sm
      "
            >
              <div className="flex items-center gap-3">
                <img
                  src={
                    item.user_avatar?.trim() ? item.user_avatar : DefaultAvatar
                  }
                  alt={item.user_name}
                  onError={(e) => {
                    e.currentTarget.src = DefaultAvatar;
                  }}
                  className="
            w-12 h-12
            rounded-full
            object-cover
          "
                />

                <div>
                  <h4 className="font-semibold">{item.user_name}</h4>

                  <span
                    className={`
              inline-block mt-1
              px-3 py-1
              rounded-full
              text-xs
              ${
                item.status === "approved"
                  ? "bg-green-100 text-green-700"
                  : item.status === "rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
              }
            `}
                  >
                    {item.status}
                  </span>
                </div>
              </div>

<div className="mt-4">
  <p className="line-clamp-2 text-gray-700">
    {item.message}
  </p>

  {item.message.length > 100 && (
    <button
      onClick={() => setSelectedTestimonial(item)}
      className="
        mt-2
        text-sm
        text-[#FF8A5B]
        font-medium
      "
    >
      Baca selengkapnya
    </button>
  )}
</div>

              <div className="flex gap-2 mt-4">
                {item.status === "pending" && (
                  <>
                    <button
                      onClick={() => approveTestimonial(item.id)}
                      className="
                flex-1
                py-3
                rounded-xl
                bg-green-500
                text-white
              "
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => rejectTestimonial(item.id)}
                      className="
                flex-1
                py-3
                rounded-xl
                bg-red-500
                text-white
              "
                    >
                      Reject
                    </button>
                  </>
                )}

                <button
                  onClick={() => deleteTestimonial(item.id)}
                  className="
            flex-1
            py-3
            rounded-xl
            bg-gray-900
            text-white
          "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr
                className="
                bg-[#FAF7F4]
                border-b
              "
              >
                <th className="p-5 text-left">User</th>

                <th className="p-5 text-left">Testimoni</th>

                <th className="p-5 text-left">Status</th>

                <th className="p-5 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {testimonials.map((item) => (
                <tr
                  key={item.id}
                  className="
                  border-b
                  hover:bg-[#FFF9F5]
                  transition-colors
                "
                >
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={
                          item.user_avatar?.trim()
                            ? item.user_avatar
                            : DefaultAvatar
                        }
                        alt={item.user_name || "User"}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = DefaultAvatar;
                        }}
                        className="
    w-12 h-12
    rounded-full
    object-cover
    border-2
    border-[#FFE0D0]
  "
                      />
                      <div>
                        <h4 className="font-semibold">{item.user_name}</h4>
                      </div>
                    </div>
                  </td>

               <td className="p-5 max-w-lg">
  <p className="line-clamp-2 text-gray-700">
    {item.message}
  </p>

  {item.message.length > 100 && (
    <button
      onClick={() => setSelectedTestimonial(item)}
      className="
        mt-2
        text-sm
        text-[#FF8A5B]
        font-medium
      "
    >
      Baca selengkapnya
    </button>
  )}
</td>

                  <td className="p-5">
                    <span
                      className={`
                      px-4 py-2
                      rounded-full
                      text-xs
                      font-medium
                      ${
                        item.status === "approved"
                          ? "bg-green-100 text-green-700"
                          : item.status === "rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                      }
                    `}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-5">
                    <div className="flex justify-center gap-2">
                      {item.status === "pending" && (
                        <>
                          <button
                            onClick={() => approveTestimonial(item.id)}
                            className="
                            p-3
                            rounded-xl
                            bg-green-500
                            text-white
                            hover:scale-105
                            transition-all
                          "
                          >
                            <Check size={18} />
                          </button>

                          <button
                            onClick={() => rejectTestimonial(item.id)}
                            className="
                            p-3
                            rounded-xl
                            bg-red-500
                            text-white
                            hover:scale-105
                            transition-all
                          "
                          >
                            <X size={18} />
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => deleteTestimonial(item.id)}
                        className="
                        p-3
                        rounded-xl
                        bg-blue-900
                        text-white
                        hover:scale-105
                        transition-all
                      "
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {testimonials.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="
                    py-20
                    text-center
                    text-gray-500
                  "
                  >
                    Belum ada testimoni
                  </td>
                </tr>
              )}
            </tbody>
          </table>
     
        </div>
      </div>
           {selectedTestimonial && (
  <div
    className="
      fixed inset-0
      bg-black/50
      flex items-center justify-center
      z-50
      p-5
    "
  >
    <div
      className="
        bg-white
        rounded-3xl
        max-w-xl
        w-full
        p-6
      "
    >
      <h3 className="text-xl font-bold mb-4">
        Testimoni
      </h3>

      <p
  className="
    whitespace-pre-wrap
    max-h-[400px]
    overflow-y-auto
    pr-2
    text-gray-700
  "
>
  {selectedTestimonial.message}
</p>

      <button
        onClick={() =>
          setSelectedTestimonial(null)
        }
        className="
          mt-6
          px-5 py-2
          rounded-xl
          bg-[#FF8A5B]
          text-white
        "
      >
        Tutup
      </button>
    </div>
  </div>
)}
    </div>
    
  );
}
