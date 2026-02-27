import fs from "fs";
import path from "path";

// Simple JSON-based storage adapter for serverless environments
class JsonStorageAdapter {
  private dataFile: string;
  private data: any;

  constructor(filePath: string = "./app-data.json") {
    this.dataFile = path.resolve(filePath);
    this.loadData();
  }

  private loadData() {
    try {
      if (fs.existsSync(this.dataFile)) {
        const rawData = fs.readFileSync(this.dataFile, "utf8");
        this.data = JSON.parse(rawData);
      } else {
        this.data = { tables: {} };
        this.saveData();
      }
    } catch (error) {
      console.warn("Failed to load data file, starting with empty data:", error);
      this.data = { tables: {} };
    }
  }

  private saveData() {
    try {
      fs.writeFileSync(this.dataFile, JSON.stringify(this.data, null, 2));
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  }

  // Simple query methods for basic CRUD operations
  insert(table: string, record: any) {
    if (!this.data.tables[table]) {
      this.data.tables[table] = [];
    }
    const id = Date.now().toString();
    const recordWithId = { id, ...record, createdAt: new Date().toISOString() };
    this.data.tables[table].push(recordWithId);
    this.saveData();
    return recordWithId;
  }

  findAll(table: string) {
    return this.data.tables[table] || [];
  }

  findById(table: string, id: string) {
    const records = this.data.tables[table] || [];
    return records.find((record: any) => record.id === id);
  }

  update(table: string, id: string, updates: any) {
    const records = this.data.tables[table] || [];
    const index = records.findIndex((record: any) => record.id === id);
    if (index !== -1) {
      records[index] = { ...records[index], ...updates, updatedAt: new Date().toISOString() };
      this.saveData();
      return records[index];
    }
    return null;
  }

  delete(table: string, id: string) {
    const records = this.data.tables[table] || [];
    const index = records.findIndex((record: any) => record.id === id);
    if (index !== -1) {
      const deleted = records.splice(index, 1)[0];
      this.saveData();
      return deleted;
    }
    return null;
  }
}

export const storage = new JsonStorageAdapter();