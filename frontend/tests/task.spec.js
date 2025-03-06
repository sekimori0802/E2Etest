const { test, expect } = require('@playwright/test');

test.describe('タスク管理アプリのE2Eテスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:9000');
  });

  test('新しいタスクを追加できる', async ({ page }) => {
    const taskText = 'テストタスク';
    
    // タスクを入力
    await page.fill('#taskInput', taskText);
    
    // 追加ボタンをクリック
    await page.click('button:has-text("追加")');
    
    // タスクが表示されていることを確認
    const taskElement = page.locator('.task-item >> text=' + taskText);
    await expect(taskElement).toBeVisible();
  });

  test('タスクを完了状態に切り替えできる', async ({ page }) => {
    const taskText = '完了するタスク';
    
    // タスクを追加
    await page.fill('#taskInput', taskText);
    await page.click('button:has-text("追加")');
    
    // タスクをクリックして完了状態に
    await page.click(`.task-item >> text=${taskText}`);
    
    // 完了状態のクラスが付与されていることを確認
    const taskElement = page.locator(`.task-item:has-text("${taskText}")`);
    await expect(taskElement).toHaveClass(/completed/);
  });

  test('タスクを削除できる', async ({ page }) => {
    const taskText = '削除するタスク';
    
    // タスクを追加
    await page.fill('#taskInput', taskText);
    await page.click('button:has-text("追加")');
    
    // 削除ボタンをクリック
    await page.click(`.task-item:has-text("${taskText}") >> button:has-text("削除")`);
    
    // タスクが表示されていないことを確認
    const taskElement = page.locator(`.task-item >> text=${taskText}`);
    await expect(taskElement).not.toBeVisible();
  });
});
