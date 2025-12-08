import LostItem from "../components/LostItem";
import { useLoaderData, useRevalidator } from "react-router";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export const links = () => [
  { rel: "stylesheet", href: "/app/styles/dashboard.css" },
];

export const loader = async () => {
  const itemData = await fetch("http://localhost:3001/items");
  return itemData.json();
};

export default function Dashboard() {
  const items = useLoaderData();
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const revalidator = useRevalidator();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    date: "",
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Generate a simple ID (in production, this would be handled by the server)
      const newItem = {
        ...formData,
        id: String(Date.now()),
      };

      const response = await fetch("http://localhost:3001/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error(`Failed to create item. Status: ${response.status}`);
      }

      // Reset form and close dialog
      setFormData({
        title: "",
        location: "",
        date: "",
        image: "",
      });
      setOpen(false);

      // Revalidate to refresh the data
      revalidator.revalidate();
    } catch (error) {
      console.error("Error during POST request:", error);
      alert("Failed to add item. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData({
        ...formData,
        image: base64String,
      });
    };
    reader.onerror = () => {
      console.error("Error reading file");
      alert("Failed to read image file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">FoundIt</div>
        <input type="text" className="search-bar" placeholder="Search items" />
        <div className="nav-links">
          <button className="nav-btn">Messages</button>
          <button className="nav-btn">Profile</button>
        </div>
        <div className="profile-picture">
          <img src="/images/profile.png" />
        </div>
      </nav>

      <div className="feed">
        {items.map((item) => (
          <LostItem key={item.id} id={item.id} {...item} />
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button id="add-button" className="add-button">
            +
          </button>
        </DialogTrigger>
        <DialogContent className="form">
          <DialogHeader className="header_form">
            <DialogTitle className="header_title">
              <p>Add New Item</p>
            </DialogTitle>
            <DialogDescription>
              <p>Add a new lost or found item to the system</p>
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4 grid_spacing">
              <div className="grid gap-2">
                <Label htmlFor="title">Item Name</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Black Backpack"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Hillman Library"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date Lost</Label>
                <Input
                  id="date"
                  name="date"
                  placeholder="e.g., 12/21/2025"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  name="image"
                  onChange={handleImageChange}
                  required
                  type="file"
                  accept="image/*"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="max-w-full h-32 object-contain rounded-md border"
                    />
                  </div>
                )}
              </div>
            </div>
            <DialogFooter className="form_footer">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
                className="form_cancel_btn"
              >
                <p>Cancel</p>
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="form_item_btn"
              >
                {isSubmitting ? "Adding..." : "Add Item"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
