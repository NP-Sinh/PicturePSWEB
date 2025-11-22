import pictureModel from "../models/pictureModel.js";

export const pictureServices = {
    // lấy tất cả
    getPictures: async () => {
        try {
            const data = await pictureModel.find().sort({ createdAt: -1 });
            return data;
        } catch (error) {
            console.error("Lỗi getPictures", err);
        }
    },
     // Lấy 1 hình theo ID
    getPictureById: async (id) => {
        try {
            return await pictureModel.findById(id);
        } catch (error) {
            console.error("Lỗi getPictureById:", error);
            throw error;
        }
    },

    // Tạo mới hình
    createPicture: async (payload) => {
        try {
            const newPicture = await pictureModel.create(payload);
            return newPicture;
        } catch (error) {
            console.error("Lỗi createPicture:", error);
            throw error;
        }
    },

    // Cập nhật hình theo ID
    updatePicture: async (id, payload) => {
        try {
            const updated = await pictureModel.findByIdAndUpdate(id, payload, { new: true });
            return updated;
        } catch (error) {
            console.error("Lỗi updatePicture:", error);
            throw error;
        }
    },

    // Xóa hình
    deletePicture: async (id) => {
        try {
            await pictureModel.findByIdAndDelete(id);
            return { message: "Xóa thành công" };
        } catch (error) {
            console.error("Lỗi deletePicture:", error);
            throw error;
        }
    }
}