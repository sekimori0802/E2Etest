const { test, expect } = require('@playwright/test');

test.describe('タスク管理アプリのE2Eテスト', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:9000');
  });

  test('新しいタスクを追加できる', async ({ page }) => {
    const taskText = 'テストタスク';
    
    // 初期状態のスクリーンショットを撮影
    await page.screenshot({ path: 'screenshots/add-task-1-initial.png' });
    
    // タスクを入力
    await page.fill('#taskInput', taskText);
    await page.screenshot({ path: 'screenshots/add-task-2-input.png' });
    
    // 追加ボタンをクリック
    await page.click('button:has-text("追加")');
    await page.screenshot({ path: 'screenshots/add-task-3-after-add.png' });
    
    // タスクが表示されていることを確認
    const taskElement = page.locator('.task-item >> text=' + taskText);
    await expect(taskElement).toBeVisible();
    
    // 最終状態のスクリーンショットを撮影
    await page.screenshot({ path: 'screenshots/add-task-4-final.png' });
  });

  test('タスクを完了状態に切り替えできる', async ({ page }) => {
    const taskText = '完了するタスク';
    
    // タスクを追加
    await page.fill('#taskInput', taskText);
    await page.click('button:has-text("追加")');
    await page.screenshot({ path: 'screenshots/complete-task-1-added.png' });
    
    // タスクをクリックして完了状態に
    await page.click(`.task-item >> text=${taskText}`);
    await page.screenshot({ path: 'screenshots/complete-task-2-clicked.png' });
    
    // 完了状態のクラスが付与されていることを確認
    const taskElement = page.locator(`.task-item:has-text("${taskText}")`);
    await expect(taskElement).toHaveClass(/completed/);
    
    // 最終状態のスクリーンショットを撮影
    await page.screenshot({ path: 'screenshots/complete-task-3-final.png' });
  });

  test('タスクを削除できる', async ({ page }) => {
    const taskText = '削除するタスク';
    
    // タスクを追加
    await page.fill('#taskInput', taskText);
    await page.click('button:has-text("追加")');
    await page.screenshot({ path: 'screenshots/delete-task-1-added.png' });
    
    // 削除ボタンをクリック
    await page.click(`.task-item:has-text("${taskText}") >> button:has-text("削除")`);
    await page.screenshot({ path: 'screenshots/delete-task-2-after-delete.png' });
    
    // タスクが表示されていないことを確認
    const taskElement = page.locator(`.task-item >> text=${taskText}`);
    await expect(taskElement).not.toBeVisible();
    
    // 最終状態のスクリーンショットを撮影
    await page.screenshot({ path: 'screenshots/delete-task-3-final.png' });
  });
});
