// ==UserScript==
// @name         Aiko Janitor
// @namespace    aiko.janitor
// @version      1.1.1
// @description  Janitor AI 聊天页报错后自动重试或重抽。单击小 Aiko 打开设置，双击开关。
// @match        https://janitorai.com/*
// @match        https://www.janitorai.com/*
// @match        https://jani.com/*
// @match        https://www.jani.com/*
// @icon         data:image/png;base64,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
// @downloadURL  https://raw.githubusercontent.com/UndergroundAlzar/Aiko-Janitor/main/aiko-janitor.user.js
// @updateURL    https://raw.githubusercontent.com/UndergroundAlzar/Aiko-Janitor/main/aiko-janitor.user.js
// @run-at       document-idle
// @noframes
// @sandbox      DOM
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// ==/UserScript==

(() => {
  'use strict';

  const HOST_ID = 'aiko-janitor-widget';
  if (document.getElementById(HOST_ID)) return;

  const STORAGE_KEY = 'aiko-janitor.settings.v1';
  const DOUBLE_TAP_MS = 290;
  const ICON_BASE64 = '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';
  const UNLIMITED_RETRIES = 'unlimited';
  const DEFAULTS = Object.freeze({
    enabled: true, delay: 'five', seconds: 10, mode: 'auto', limit: UNLIMITED_RETRIES,
    opacity: 85, side: 'right', position: 0.47,
  });

  const UI = {
    composer: '[data-chat-composer], [class*="chatComposer"], [class*="_chatInputContainer_"]',
    layout: '[class*="chatLayoutWrapper"], [data-chat-layout]',
    main: '[class*="messagesMain"], [data-chat-messages], [role="log"]',
    row: ':is([data-index], [data-item-index]):not([data-sonner-toast])',
    message: ':is([class*="messageDisplayWrapper"], [data-message-id], [data-message-author-role], [data-message-role], [data-testid="chat-message"])',
    choices: '[class*="botChoicesContainer"], [data-reply-choices], [data-testid="reply-choices"], [aria-roledescription="carousel"]',
    slider: '[class*="botChoicesSlider"], [data-reply-slider], [data-carousel-track]',
    counter: '[class*="messageCounter"], [data-reply-counter]',
    choice: 'button[class*="botChoiceButton"]',
    next: 'button[class*="botChoiceButton"][class*="_right_"]',
    directReroll: '[data-action="reroll"], [data-testid="reroll-response"]',
    more: 'button[class*="scrollToBottomButton"]',
    send: 'button[class*="_sendButton_"], button[data-action="send"]',
    stop: 'button[class*="_stopButton_"], button[data-action="stop"]',
    prose: 'pre, code, [contenteditable="true"], [data-message-content], .markdown-body, .markdown, [class*="_markdown_"]',
    typedError: '[data-type="error" i], [data-status="error" i], [data-severity="error" i], [data-chat-error], [data-testid="error-banner"], [class*="errorBanner"], .error-banner, .toast-error, .alert-danger, .Toastify__toast--error, .MuiAlert-standardError, .MuiAlert-filledError, .MuiAlert-outlinedError',
    notice: '[data-sonner-toast], [role="alert"], [aria-live="assertive"], [data-toast], .Toastify__toast, [role="status"]',
  };
  const NOTICE_SELECTOR = UI.notice + ', ' + UI.typedError;
  const RETRY_ICON = /^M256 48C141\.6 48 48 141\.6 48 256s93\.6 208 208 208.*zm112 194h-98/i;
  const RETRY_LABEL = /^(?:re[\s-]?generate(?: (?:the )?last (?:answer|reply|response))?|re[\s-]?try(?: (?:generation|(?:last|failed|this) (?:request|message|reply)))?|try again|重新生成(?:上一[个個条條次](?:回答|回复|回覆|答案)|最后一[个条次](?:回答|回复|答案))?|重新產生(?:上一[個條]回覆)?|(?:重新|再次)?(?:重试|重試|尝试|嘗試)(?:生成|回复|回覆)?)$/i;
  const REROLL_LABEL = /^(?:re-?roll(?: (?:response|reply))?|(?:generate|create) (?:a |another |new )+(?:reply|response|answer)|re-?generate (?:response|reply|answer)|重抽(?:回复|回覆)?|生成(?:新|另一[个条則])(?:回复|回答|回覆)|重新生成(?:回复|回答|回覆))$/i;
  const NEXT_LABEL = /^(?:next(?:\s*[-—·].*)?|下一[步条條則页頁個个](?:[-—·].*)?)$/i;
  const STOP_LABEL = /^(?:stop(?: generating| generation)?|cancel|取消|停止(?:生成)?)$/i;
  const SEND_LABEL = /^(?:send(?: message)?|发送(?:消息)?|傳送|發送)$/i;
  // Some interrupted streams are announced as an informational toast by the site.
  const INTERRUPTED_NOTICE = /connection (?:dropped|lost)|tap (?:to )?continue|(?:连接|連線)中[断斷]|(?:點擊|点击).{0,3}[继续繼續]{2}.{0,8}(?:生成|中断|中斷)/i;
  const FAILURE_IN_STATUS = /\b(?:error|failed|failure|exception|unavailable|unauthorized|forbidden|timed out|too many requests|HTTP\s+[45]\d\d)\b|发生错误|發生錯誤|失败|失敗|出错|出錯|エラー/i;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const range = (value, min, max, fallback) => Number.isFinite(value)
    ? clamp(Math.round(value), min, max) : fallback;
  const validChoice = (value, values, fallback) => values.includes(value) ? value : fallback;
  const normalizeText = (text) => (text || '').replace(/\s+/g, ' ').trim();
  const isElement = (node) => node?.nodeType === Node.ELEMENT_NODE;
  const hasBox = (element) => Boolean(element?.isConnected && element.getClientRects().length);
  const usable = (element) => hasBox(element) && typeof element.click === 'function'
    && !element.matches(':disabled, [aria-disabled="true"]')
    && !element.closest('[hidden], [inert], [aria-hidden="true"]')
    && getComputedStyle(element).visibility === 'visible';

  function cleanSettings(value) {
    const raw = value && typeof value === 'object' ? value : {};
    return {
      enabled: typeof raw.enabled === 'boolean' ? raw.enabled : DEFAULTS.enabled,
      delay: validChoice(raw.delay, ['now', 'five', 'custom'], DEFAULTS.delay),
      seconds: range(raw.seconds, 1, 3600, DEFAULTS.seconds),
      mode: validChoice(raw.mode, ['auto', 'retry', 'reroll'], DEFAULTS.mode),
      limit: raw.limit === UNLIMITED_RETRIES ? UNLIMITED_RETRIES : range(raw.limit, 1, 10, DEFAULTS.limit),
      opacity: range(raw.opacity, 20, 100, DEFAULTS.opacity),
      side: validChoice(raw.side, ['left', 'right'], DEFAULTS.side),
      position: Number.isFinite(raw.position) ? clamp(raw.position, 0, 1) : DEFAULTS.position,
    };
  }

  function loadSettings() {
    try {
      if (typeof GM_getValue === 'function') return cleanSettings(GM_getValue(STORAGE_KEY));
      return cleanSettings(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } catch {
      return cleanSettings();
    }
  }

  function saveSettings(value) {
    try {
      if (typeof GM_setValue === 'function') GM_setValue(STORAGE_KEY, value);
      else localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  }

  function chatKey() {
    const path = location.pathname.replace(/\/+$/, '');
    // The private editor has a single identifier. Public transcripts use /chats/public/… .
    return /^\/(?:[a-z]{2,3}(?:-[a-z0-9]{2,8})*\/)?chats?\/[a-z0-9_-]+$/i.test(path)
      && !/\/(?:chats?\/)(?:public|new|preview)$/i.test(path) ? path : '';
  }

  function labelsMatch(button, pattern) {
    return [button.getAttribute('aria-label'), button.getAttribute('title'), button.textContent]
      .some((label) => label && label.length < 120 && pattern.test(normalizeText(label)));
  }

  function isRetryButton(button) {
    if (button.matches('[data-action="retry"], [data-testid="retry-generation"]') || labelsMatch(button, RETRY_LABEL)) return true;
    const path = button.querySelector('svg path');
    return Boolean(path && RETRY_ICON.test(path.getAttribute('d') || ''));
  }

  function readVariants(wrapper) {
    if (!wrapper) return null;
    const counters = wrapper.querySelectorAll(UI.counter + ', :scope > span, [role="status"]');
    for (const counter of counters) {
      if (counter.childElementCount || counter.closest(UI.prose)) continue;
      const numbers = /^(\d+)\s*(?:\/|of)\s*(\d+)$/i.exec(normalizeText(counter.textContent));
      if (numbers) return { count: Number(numbers[2]), current: Number(numbers[1]) };
    }

    const slider = wrapper.querySelector(UI.slider);
    if (!slider) return null;
    const count = slider.querySelectorAll(UI.message).length || slider.childElementCount;
    if (!count) return null;
    const offset = /^translate(?:X|3d)?\(\s*(-?\d+(?:\.\d+)?)%\s*[,)]/i.exec(slider.style.transform);
    if (offset) return { count, current: 1 - Number(offset[1]) / 100 };
    return { count, current: count === 1 ? 1 : null };
  }

  function chatControls(scope) {
    return Array.from(scope.querySelectorAll('button, [role="button"]')).filter((button) =>
      !button.closest(UI.prose) && !button.closest('nav, [data-chat-header], [role="dialog"], [data-sonner-toast]'));
  }

  function shownElement(root, selector) {
    return Array.from(root.querySelectorAll(selector)).find(hasBox);
  }

  function findButton(controls, matches) {
    const candidates = controls.filter(matches);
    return candidates.find(usable) || candidates[0] || null;
  }

  function readChat() {
    const composer = shownElement(document, '[data-chat-composer]') || shownElement(document, UI.composer);
    const layout = composer?.closest(UI.layout) || shownElement(document, UI.layout) || document;
    const main = shownElement(layout, UI.main) || shownElement(layout, 'main') || layout;
    const messages = main.querySelectorAll(UI.message);
    const last = messages[messages.length - 1];
    const rows = last ? null : main.querySelectorAll(UI.row);
    const row = last?.closest(UI.row) || rows?.[rows.length - 1] || last?.closest(UI.choices) || last;
    const scope = row || main;
    const controls = chatControls(scope);
    const namedNext = row && findButton(controls, (button) => labelsMatch(button, NEXT_LABEL));
    const knownChoices = scope.matches?.(UI.choices) ? scope : shownElement(scope, UI.choices);
    const choices = knownChoices || (namedNext && (namedNext.closest('footer, [role="toolbar"], [role="group"]') || row));
    const variants = readVariants(choices);
    const next = choices && findButton(controls, (button) => choices.contains(button)
      && (button.matches(UI.next) || labelsMatch(button, NEXT_LABEL)));
    const direct = findButton(controls, (button) => button.matches(UI.directReroll)
      || labelsMatch(button, REROLL_LABEL));
    const retry = findButton(controls, (button) => !button.closest(UI.choices) && isRetryButton(button));
    const reroll = usable(direct) ? direct : (variants && variants.current === variants.count ? next : null);
    const indexText = row?.getAttribute('data-item-index') ?? row?.getAttribute('data-index');
    const index = indexText && /^\d+$/.test(indexText) ? Number(indexText) : null;
    const messageId = row?.getAttribute('data-message-id') || last?.getAttribute('data-message-id');
    const jump = shownElement(layout, UI.more);
    // Virtual lists may leave space for unmounted rows. Only use geometry when the site offers a jump.
    const needsJump = usable(jump) && (!row || (index !== null &&
      row.parentElement.getBoundingClientRect().bottom - row.getBoundingClientRect().bottom > 56));
    const stop = shownElement(composer || layout, UI.stop) || (composer &&
      findButton(Array.from(composer.querySelectorAll('button')), (button) => labelsMatch(button, STOP_LABEL)));
    return {
      composer, row, index, messageId, variants, choices, retry, reroll, next, jump, needsJump,
      busy: usable(stop) || Boolean(row?.matches('[aria-busy="true"]') || row?.querySelector(UI.message + '[aria-busy="true"]')),
    };
  }

  function noticeText(element) {
    const title = element.querySelector('[data-title]');
    const description = element.querySelector('[data-description]');
    return normalizeText(title ? title.textContent + ' ' + (description?.textContent || '') : element.textContent);
  }

  function errorNotice(element) {
    if (!element.isConnected || !element.matches(NOTICE_SELECTOR) || element.closest(UI.prose)
      || element.closest('[hidden], [aria-hidden="true"], [data-removed="true"], [data-state="closed"]')) return null;
    const toast = element.closest('[data-sonner-toast]');
    if (toast && toast !== element) return null;
    const typedError = element.matches(UI.typedError);
    if (!typedError && !toast && element.querySelector(NOTICE_SELECTOR)) return null;

    const type = (element.dataset.type || element.dataset.status || element.dataset.severity || '').toLowerCase();
    const message = noticeText(element);
    // The site's error marker is sufficient in every language, including an empty error toast.
    if (typedError) return { message };
    if (type === 'success' || type === 'loading'
      || element.closest('.Toastify__toast--success, .MuiAlert-standardSuccess, .alert-success')) return null;
    if (message && (INTERRUPTED_NOTICE.test(message) || FAILURE_IN_STATUS.test(message)
      || (!type && !toast && element.matches('[role="alert"], [aria-live="assertive"]')))) return { message };
    return null;
  }

  let config = loadSettings();
  let route = '';
  let visit = 0;
  let pending = null;
  let inFlight = null;
  let manualPress = null;
  let previousSend = null;
  let attempts = 0;
  let tickTimer = 0;
  let nextTickAt = Infinity;
  let currentStatus = { tone: 'off', text: '' };
  const seenNotices = new WeakMap();

  const host = document.createElement('aiko-janitor');
  host.id = HOST_ID;
  host.hidden = true;
  const shadow = host.attachShadow({ mode: 'open' });
  const widget = buildWidget();
  document.body.append(host);

  function status(tone, text) {
    if (currentStatus.tone === tone && currentStatus.text === text) return;
    currentStatus = { tone, text };
    widget.render();
  }

  function idleStatus() {
    if (config.enabled) status('on', '等候聊天页报错');
    else status('off', '自动重试已关闭');
  }

  function clearTimer() {
    clearTimeout(tickTimer);
    tickTimer = 0;
    nextTickAt = Infinity;
  }

  function resetChain() {
    clearTimer();
    clearManualPress();
    pending = null;
    inFlight = null;
    previousSend = null;
    attempts = 0;
  }

  function syncRoute() {
    const next = chatKey();
    if (route === next) return;
    route = next;
    visit += 1;
    resetChain();
    host.hidden = !next;
    widget.close(false);
    if (next) widget.place();
    idleStatus();
  }

  function sameTurn(a, b) {
    if (!a || !b) return false;
    if (a.index !== null && b.index !== null) return a.index === b.index;
    if (a.messageId && b.messageId) return a.messageId === b.messageId;
    return Boolean(a.row && a.row === b.row);
  }

  function snapshot(view, kind) {
    if (!kind || view.busy || view.needsJump) return null;
    return { kind, row: view.row, index: view.index, messageId: view.messageId, count: view.variants?.count || 0 };
  }

  function replyArrived(before, view) {
    if (!before || view.busy || view.needsJump) return false;
    if (before.kind === 'reroll') return sameTurn(before, view) && view.variants?.count > before.count;
    if (view.retry || !(view.choices || view.reroll)) return false;
    if (before.index !== null && view.index !== null) return view.index > before.index;
    return Boolean(before.row && view.row && !sameTurn(before, view));
  }

  function manualAction(isSend = false) {
    resetChain();
    if (isSend) previousSend = readChat();
    idleStatus();
  }

  function isComposerSend(button) {
    return button.closest(UI.composer) && (button.matches(UI.send) || labelsMatch(button, SEND_LABEL));
  }

  function manualControl(event) {
    if (!event.isTrusted || !route || !isElement(event.target) || event.target === host) return null;
    const button = event.target.closest('button, [role="button"]');
    if (!usable(button) || button.closest(UI.prose)) return null;
    if (button.matches([UI.stop, UI.choice, UI.directReroll].join(', ')) || isComposerSend(button)
      || isRetryButton(button) || labelsMatch(button, REROLL_LABEL)
      || (button.closest(UI.composer) && labelsMatch(button, STOP_LABEL))
      || (labelsMatch(button, NEXT_LABEL) && readChat().next === button)) return button;
    return null;
  }

  function clearManualPress() {
    if (!manualPress) return;
    clearTimeout(manualPress.releaseTimer);
    manualPress = null;
  }

  function resumeAfterPress() {
    if (!manualPress) return;
    clearManualPress();
    scheduleTick();
  }

  function beginManualPress(event) {
    if (!config.enabled || !route || !event.isTrusted) return;
    const pointer = event.type === 'pointerdown';
    if (pointer && (!event.isPrimary || event.button !== 0)) return;
    if (!pointer && (event.repeat || event.isComposing || (event.key !== ' ' && event.key !== 'Enter'))) return;
    const button = event.target === host ? event.composedPath().find((element) =>
      isElement(element) && element.matches('.cancel, .switch')) : manualControl(event);
    if (!button) return;
    clearManualPress();
    manualPress = { button, pointerId: event.pointerId, key: event.key, releaseTimer: 0 };
  }

  function finishManualPress(event) {
    if (!event.isTrusted || !manualPress) return;
    if (event.type === 'keyup' ? event.key !== manualPress.key : event.pointerId !== manualPress.pointerId) return;
    if (event.type === 'pointercancel') return resumeAfterPress();
    clearTimeout(manualPress.releaseTimer);
    manualPress.releaseTimer = setTimeout(resumeAfterPress, event.pointerType === 'touch' ? 350 : 0);
  }

  function observeManualClick(event) {
    const button = manualControl(event);
    if (button) manualAction(Boolean(isComposerSend(button)));
  }

  function observeEnter(event) {
    if (!event.isTrusted || event.defaultPrevented || event.isComposing || event.key !== 'Enter'
      || event.shiftKey || event.altKey || event.metaKey || event.ctrlKey || innerWidth < 768
      || !isElement(event.target) || !event.target.matches('textarea')
      || !event.target.closest(UI.composer) || !event.target.value.trim() || !route) return;
    manualAction(true);
  }

  function retryLimitReached() {
    return config.limit !== UNLIMITED_RETRIES && attempts >= config.limit;
  }

  function scheduleTick(delay = 0) {
    if (!pending) return;
    const at = Date.now() + delay;
    if (tickTimer && nextTickAt <= at) return;
    clearTimeout(tickTimer);
    nextTickAt = at;
    tickTimer = setTimeout(tick, delay);
  }

  function onNotice(element, replayVisible = false) {
    const notice = errorNotice(element);
    if (!notice) {
      seenNotices.delete(element);
      return;
    }
    const id = element.getAttribute('data-toast-id') || element.id;
    const previous = seenNotices.get(element);
    if (previous && previous.visit !== visit && previous.id === id) return;
    seenNotices.set(element, { id, message: notice.message, visit });
    // Sonner may mount an empty title and fill it on a later render.
    if (!replayVisible && previous && previous.id === id && (!previous.message || previous.message === notice.message
      || notice.message.startsWith(previous.message + ' '))) return;
    if (!config.enabled || !route) return;
    if (pending) {
      pending.notice = element;
      return;
    }
    const view = readChat();
    const kind = view.retry ? 'retry' : (view.choices || view.reroll ? 'reroll' : '');
    // If the next attempt is already busy, retain its starting turn so a late
    // notification cannot reroll a response that subsequently succeeds.
    const before = snapshot(view, kind) || inFlight?.before || null;
    inFlight = null;
    pending = { failedAt: Date.now(), notice: element, before, jumped: false, lastChoice: null };
    scheduleTick();
  }

  function delayMs() {
    if (config.delay === 'now') return 0;
    return (config.delay === 'five' ? 5 : config.seconds) * 1000;
  }

  function chooseAction(view, notice) {
    if (view.busy) return null;
    if (config.mode !== 'reroll') {
      if (!view.needsJump && usable(view.retry)) return { kind: 'retry', button: view.retry };
      if (notice?.isConnected && errorNotice(notice)) {
        const button = Array.from(notice.querySelectorAll('button, [role="button"]'))
          .find((item) => usable(item) && isRetryButton(item));
        if (button) return { kind: 'retry', button };
      }
    }
    // A send can fail before the new user message is mounted. Its previous answer is a different turn.
    if (config.mode !== 'retry' && !view.needsJump && usable(view.reroll) && !sameTurn(previousSend, view)) {
      return { kind: 'reroll', button: view.reroll };
    }
    return null;
  }

  function tick() {
    clearTimer();
    syncRoute();
    if (!pending || !config.enabled || !route) return;
    if (retryLimitReached()) return status('warn', '已达本轮重试上限 · 调高次数可继续');
    const remaining = pending.failedAt + delayMs() - Date.now();
    if (remaining > 0) {
      status('wait', Math.ceil(remaining / 1000) + ' 秒后' + actionName(config.mode));
      scheduleTick(Math.min(remaining, 1000));
      return;
    }
    if (manualPress?.button.isConnected) return status('wait', '等候手动操作完成');

    const view = readChat();
    if (replyArrived(pending.before, view)) {
      resetChain();
      return status('on', '回复已生成 · 等候下次报错');
    }
    const action = chooseAction(view, pending.notice);
    if (action) {
      const notice = pending.notice;
      pending = null;
      attempts += 1;
      inFlight = { before: snapshot(view, action.kind), notice, sawBusy: false };
      if (action.kind === 'retry') previousSend = null;
      status('wait', '已触发' + actionName(action.kind) + ' · 第 ' + attempts + ' 次');
      action.button.click();
      return;
    }

    if (view.needsJump && !view.busy && !pending.jumped) {
      pending.jumped = true;
      view.jump.click();
    }
    const current = view.variants?.current;
    if (config.mode !== 'retry' && !view.busy && !view.needsJump && !sameTurn(previousSend, view)
      && usable(view.next) && Number.isInteger(current) && current >= 1 && current < view.variants.count) {
      status('wait', '前往最后一个回复版本 · ' + current + '/' + view.variants.count);
      if (pending.lastChoice !== current) {
        pending.lastChoice = current;
        view.next.click();
      }
    } else {
      status('wait', '等候' + actionName(config.mode) + '按钮可用');
    }
    // Changes to the toolbar wake the job immediately. This fallback also catches CSS-only changes.
    scheduleTick(1000);
  }

  function actionName(kind) {
    if (kind === 'retry') return '重试';
    if (kind === 'reroll') return '重抽';
    return '自动重试';
  }

  function cancelPending() {
    if (!pending) return;
    clearTimer();
    pending = null;
    status('on', '本次自动重试已取消');
  }

  function scanCurrentNotices(replayVisible = false) {
    for (const notice of document.querySelectorAll(NOTICE_SELECTOR)) onNotice(notice, replayVisible);
  }

  function changeSettings(update, remote = false) {
    const old = config;
    config = cleanSettings({ ...config, ...update });
    const saved = remote || saveSettings(config);
    if (config.enabled !== old.enabled) {
      resetChain();
      idleStatus();
      if (config.enabled) {
        syncRoute();
        scanCurrentNotices(true);
      }
    } else if (pending && (config.mode !== old.mode || config.delay !== old.delay
      || config.seconds !== old.seconds || config.limit !== old.limit)) {
      scheduleTick();
    }
    if (!saved) status('warn', '设置保存失败 · 本页仍可使用');
    widget.render();
    widget.place();
  }

  function collectNotices(mutations) {
    const notices = new Set();
    for (const change of mutations) {
      const element = isElement(change.target) ? change.target : change.target.parentElement;
      const enclosing = element?.closest('[data-sonner-toast]') || element?.closest(NOTICE_SELECTOR);
      if (enclosing) notices.add(enclosing);
      if (enclosing && inFlight?.notice === enclosing && change.type === 'childList'
        && change.addedNodes.length === 1 && change.removedNodes.length === 1) {
        const added = change.addedNodes[0];
        const removed = change.removedNodes[0];
        if (added.nodeType === Node.TEXT_NODE && removed.nodeType === Node.TEXT_NODE && added.data === removed.data) {
          seenNotices.delete(enclosing);
        }
      }
      if (enclosing && change.type === 'attributes' && change.oldValue !== null) {
        // A provider may reuse one toast for loading -> error, including two identical failures.
        const wasLoading = ['data-type', 'data-status', 'data-severity'].includes(change.attributeName)
          && change.oldValue !== 'error' && element.getAttribute(change.attributeName) === 'error';
        const reopened = (change.attributeName === 'hidden' && !element.hidden)
          || (change.attributeName === 'data-removed' && change.oldValue === 'true'
            && element.getAttribute('data-removed') !== 'true');
        if (wasLoading || reopened) seenNotices.delete(enclosing);
      }
      if (element && seenNotices.has(element)) notices.add(element);
      for (const node of change.addedNodes) {
        if (!isElement(node) || node.closest(UI.prose)) continue;
        if (node.matches(NOTICE_SELECTOR)) notices.add(node);
        node.querySelectorAll(NOTICE_SELECTOR).forEach((notice) => notices.add(notice));
      }
      for (const node of change.removedNodes) {
        if (!isElement(node) || node.isConnected) continue;
        seenNotices.delete(node);
        node.querySelectorAll(NOTICE_SELECTOR).forEach((notice) => seenNotices.delete(notice));
      }
    }
    return notices;
  }

  function observePage() {
    let resultFrame = 0;
    const observer = new MutationObserver((mutations) => {
      syncRoute();
      if (manualPress && !manualPress.button.isConnected) resumeAfterPress();
      for (const notice of collectNotices(mutations)) onNotice(notice);
      if (pending && !manualPress && !retryLimitReached() && Date.now() >= pending.failedAt + delayMs()) scheduleTick(32);
      if (inFlight && !resultFrame) {
        resultFrame = requestAnimationFrame(() => {
          resultFrame = 0;
          if (!inFlight) return;
          const view = readChat();
          if (view.busy) {
            inFlight.sawBusy = true;
          } else if (replyArrived(inFlight.before, view)) {
            resetChain();
            status('on', '回复已生成 · 等候下次报错');
          } else if (inFlight.sawBusy && inFlight.before?.kind === 'retry') {
            const flight = inFlight;
            flight.sawBusy = false;
            // The toolbar and portal commit separately. Give a fresh notification
            // a chance to arrive before treating an unchanged old banner as a new failure.
            setTimeout(() => {
              if (inFlight !== flight || chatKey() !== route) return;
              const settled = readChat();
              if (!settled.busy && !settled.needsJump && usable(settled.retry)
                && sameTurn(flight.before, settled) && errorNotice(flight.notice)) {
                seenNotices.delete(flight.notice);
                onNotice(flight.notice);
              }
            }, 200);
          }
        });
      }
    });
    observer.observe(document.body, {
      childList: true, subtree: true, characterData: true, attributes: true, attributeOldValue: true,
      attributeFilter: ['data-type', 'data-status', 'data-severity', 'data-state', 'data-removed',
        'data-visible', 'data-toast-id', 'id', 'role', 'class', 'hidden', 'disabled', 'aria-disabled', 'aria-busy', 'aria-hidden', 'aria-live'],
    });
    scanCurrentNotices();
    document.addEventListener('pointerdown', beginManualPress, true);
    window.addEventListener('pointerup', finishManualPress, true);
    window.addEventListener('pointercancel', finishManualPress, true);
    document.addEventListener('keydown', beginManualPress, true);
    window.addEventListener('keyup', finishManualPress, true);
    window.addEventListener('blur', resumeAfterPress);
    document.addEventListener('click', observeManualClick, true);
    document.addEventListener('keydown', observeEnter, true);
    function wakePage() {
      if (document.hidden) resumeAfterPress();
      syncRoute();
      if (route && config.enabled) scanCurrentNotices();
      scheduleTick();
    }
    document.addEventListener('visibilitychange', wakePage);
    window.navigation?.addEventListener('currententrychange', () => {
      if (route === chatKey()) return;
      for (const notice of collectNotices(observer.takeRecords())) onNotice(notice);
      syncRoute();
    });
    window.addEventListener('popstate', wakePage);
    window.addEventListener('pageshow', wakePage);
    window.addEventListener('pagehide', () => {
      clearManualPress();
      clearTimer();
    });
    if (typeof GM_addValueChangeListener === 'function') {
      GM_addValueChangeListener(STORAGE_KEY, (_key, _old, value, remote) => {
        if (remote) changeSettings(cleanSettings(value), true);
      });
    } else {
      window.addEventListener('storage', (event) => {
        if (event.key !== STORAGE_KEY || typeof GM_getValue === 'function') return;
        try { changeSettings(cleanSettings(JSON.parse(event.newValue)), true); } catch { /* Ignore invalid data. */ }
      });
    }
  }

  // Widget markup and styles live in the shadow tree to keep chat CSS out.
  function buildWidget() {
    const css = `
      :host {
        position: fixed;
        inset: 0;
        z-index: 2147483000;
        pointer-events: none;
        color-scheme: dark;
        --ink: #f4eaf4;
        --dim: #c1adc5;
        --line: #46364a;
        --mint: #b5eed0;
        --gold: #ffd18c;
        font: 14px/1.4 system-ui, -apple-system, "Segoe UI", "PingFang SC",
          "Microsoft YaHei UI", sans-serif;
        color: var(--ink);
      }
      :host([hidden]), [hidden] { display: none !important; }
      *, *::before, *::after { box-sizing: border-box; }
      button, input, select { color: inherit; font: inherit; }
      button { -webkit-tap-highlight-color: transparent; }
      button:focus-visible, input:focus-visible, select:focus-visible {
        outline: 2px solid var(--mint);
        outline-offset: 2px;
      }
      button { cursor: pointer; }
      .orb-anchor {
        position: absolute;
        top: var(--orb-y);
        left: calc(var(--view-left) + max(7px, env(safe-area-inset-left)));
        z-index: 3;
      }
      .orb-anchor[data-side="right"] {
        left: auto;
        right: calc(var(--view-right) + max(7px, env(safe-area-inset-right)));
      }
      .orb {
        display: grid;
        position: relative;
        place-items: center;
        width: 46px;
        height: 46px;
        padding: 3px;
        border-radius: 50%;
        border: 1px solid #a883a6;
        background: radial-gradient(circle at 42% 30%, #614661, #2a1d31 72%);
        box-shadow: 0 3px 14px #100d138c, inset 0 0 0 2px #f2d7ed12;
        opacity: var(--orb-opacity, .85);
        pointer-events: auto;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        transition: opacity .15s, transform .15s, border-color .15s;
      }
      .orb:active { transform: scale(.93); }
      .orb[data-tone="on"] { border-color: #a9d8be; }
      .orb[data-tone="wait"], .orb[data-tone="warn"] { border-color: #edb779; }
      .orb .portrait { display: block; width: 38px; height: 38px; pointer-events: none; }
      .orb .dot {
        position: absolute;
        right: 2px;
        bottom: 2px;
        width: 10px;
        height: 10px;
        border: 2px solid #332339;
        border-radius: 50%;
      }
      .dot { background: #a594a9; }
      [data-tone="on"] .dot { background: var(--mint); }
      [data-tone="wait"] .dot, [data-tone="warn"] .dot { background: var(--gold); }
      [data-tone="wait"] .dot { animation: glow 1.25s ease-in-out infinite alternate; }
      @keyframes glow { to { opacity: .38; } }
      .flash {
        position: absolute;
        top: 9px;
        left: calc(100% + 8px);
        padding: 5px 10px;
        border: 1px solid #65506a;
        border-radius: 9px;
        background: #291f2e;
        color: var(--ink);
        font-size: 12px;
        white-space: nowrap;
        box-shadow: 0 3px 12px #100d1366;
      }
      [data-side="right"] .flash { left: auto; right: calc(100% + 8px); }
      .scrim {
        position: absolute;
        inset: 0;
        pointer-events: auto;
        border: 0;
        background: #160e1c36;
      }
      .panel {
        position: absolute;
        z-index: 4;
        right: calc(var(--view-right) + max(10px, env(safe-area-inset-right)));
        bottom: calc(var(--view-bottom) + max(10px, env(safe-area-inset-bottom)));
        width: min(362px, calc(var(--view-width) - 20px));
        max-height: calc(var(--view-height) - 22px);
        pointer-events: auto;
        overflow: auto;
        overscroll-behavior: contain;
        scrollbar-width: thin;
        scrollbar-color: #654e68 transparent;
        border: 1px solid #59455e;
        border-radius: 20px;
        background: radial-gradient(ellipse at 0 0, #3a2940 0%, #231b29 56%);
        box-shadow: 0 20px 60px #100c15ad, inset 0 1px 0 #f9d8ff14;
      }
      .panel[data-side="left"] {
        right: auto;
        left: calc(var(--view-left) + max(10px, env(safe-area-inset-left)));
      }
      .inner { padding: 16px; }
      .header { display: flex; align-items: center; gap: 12px; }
      .header .portrait {
        width: 48px;
        height: 48px;
        padding: 3px;
        background: #fbd5ff13;
        border: 1px solid #fbd5ff26;
        border-radius: 13px;
        flex: none;
      }
      .header h2 {
        flex: 1;
        margin: 0;
        font-size: 21px;
        font-weight: 760;
        letter-spacing: -.045em;
      }
      .close {
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border: 0;
        border-radius: 11px;
        background: #fcd4ff0b;
        color: var(--dim);
        font-size: 22px;
      }
      .power-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 11px; }
      .power-label, legend, .label { font-weight: 670; }
      .switch {
        position: relative;
        flex: none;
        width: 52px;
        height: 44px;
        padding: 0;
        border: 0;
        background: transparent;
        border-radius: 22px;
      }
      .switch::before {
        content: "";
        position: absolute;
        inset: 9px 1px;
        border-radius: 20px;
        background: #4a3b50;
        border: 1px solid #635166;
      }
      .switch::after {
        content: "";
        position: absolute;
        top: 13px;
        left: 6px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #e2d4e5;
        transition: transform .15s;
      }
      .switch[aria-checked="true"]::before { background: #356351; border-color: #679682; }
      .switch[aria-checked="true"]::after { transform: translateX(22px); background: var(--mint); }
      .status {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 36px;
        padding: 2px 9px;
        border-radius: 9px;
        background: #150f1a85;
        border: 1px solid #e1b8e51b;
        color: var(--dim);
        font-size: 12px;
      }
      .status[data-tone="wait"], .status[data-tone="warn"] { color: var(--gold); }
      .status[data-tone="on"] { color: var(--mint); }
      .status .dot { width: 7px; height: 7px; border-radius: 50%; flex: none; }
      .status-text { flex: 1; overflow-wrap: anywhere; }
      .cancel {
        border: 0;
        background: transparent;
        color: var(--ink);
        padding: 5px 3px;
        min-width: 44px;
        min-height: 34px;
        text-decoration: underline;
        text-underline-offset: 3px;
      }
      fieldset { min-width: 0; margin: 15px 0 0; padding: 0; border: 0; }
      legend { margin: 0 0 6px; padding: 0; }
      .group { display: flex; gap: 3px; padding: 3px; border: 1px solid var(--line); border-radius: 11px; background: #1b1520; }
      .group button {
        flex: 1 1 0;
        min-width: 0;
        min-height: 40px;
        padding: 4px;
        border: 1px solid transparent;
        border-radius: 8px;
        background: transparent;
        color: var(--dim);
        font-size: 13px;
        white-space: nowrap;
      }
      .group button[aria-pressed="true"] { color: var(--mint); background: #273933; border-color: #4e7464; font-weight: 700; }
      .group button:hover, .close:hover { color: var(--ink); }
      .compact { display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-top: 10px; }
      .seconds, .limit {
        width: 80px;
        min-height: 38px;
        padding: 5px 8px;
        border: 1px solid var(--line);
        border-radius: 8px;
        color: var(--ink);
        background: #1e1723;
        font-size: 16px;
      }
      .seconds { text-align: right; }
      .limit { width: auto; max-width: 60%; }
      .help { margin: 5px 0 0; color: var(--dim); font-size: 12px; }
      .orb-options { margin-top: 12px; padding-top: 11px; border-top: 1px solid var(--line); }
      .opacity-row { display: flex; align-items: center; gap: 9px; margin-bottom: 1px; }
      input[type="range"] {
        flex: 1;
        min-width: 30px;
        height: 36px;
        accent-color: var(--mint);
        cursor: pointer;
      }
      output { min-width: 37px; text-align: right; color: var(--mint); font-size: 12px; font-variant-numeric: tabular-nums; }
      .dock-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
      .dock-row .group { width: min(130px, 54%); }
      .dock-row .group button { min-height: 34px; }
      .gestures { margin: 10px 0 0; color: var(--dim); font-size: 11px; text-align: center; }
      @media (min-width: 620px) {
        .panel {
          right: calc(var(--view-right) + max(57px, env(safe-area-inset-right)));
          top: clamp(calc(var(--view-top) + 12px), var(--orb-y), calc(var(--view-top) + var(--view-height) - 580px));
          bottom: auto;
        }
        .panel[data-side="left"] { left: calc(var(--view-left) + max(57px, env(safe-area-inset-left))); }
        .scrim { background: transparent; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::after, *::before { animation: none !important; transition: none !important; }
      }
    `;

    const layout = `
      <button type="button" class="scrim" aria-label="关闭设置" tabindex="-1" hidden></button>
      <div class="orb-anchor">
        <button type="button" class="orb" aria-label="Aiko Janitor 设置" aria-expanded="false"
          aria-controls="aiko-settings" title="单击设置 · 双击开关 · 拖动贴边">
          <canvas class="portrait" width="96" height="96" aria-hidden="true"></canvas>
          <span class="dot" aria-hidden="true"></span>
        </button>
        <span class="flash" role="status" hidden></span>
      </div>
      <section class="panel" id="aiko-settings" role="dialog" aria-labelledby="aiko-title" hidden>
        <div class="inner">
          <div class="header">
            <canvas class="portrait" width="96" height="96" aria-hidden="true"></canvas>
            <h2 id="aiko-title">Aiko Janitor</h2>
            <button type="button" class="close" aria-label="关闭设置">×</button>
          </div>
          <div class="power-row">
            <span class="power-label" id="aiko-power-label">自动重试</span>
            <button type="button" class="switch" role="switch" aria-labelledby="aiko-power-label" aria-checked="false"></button>
          </div>
          <div class="status">
            <span class="dot" aria-hidden="true"></span>
            <span class="status-text" role="status" aria-live="polite"></span>
            <button type="button" class="cancel" hidden>取消</button>
          </div>
          <fieldset>
            <legend>报错后等待</legend>
            <div class="group">
              <button type="button" data-setting="delay" data-value="now">立即</button>
              <button type="button" data-setting="delay" data-value="five">5 秒</button>
              <button type="button" data-setting="delay" data-value="custom">自定义</button>
            </div>
            <label class="compact custom" hidden>等待秒数
              <input class="seconds" type="number" min="1" max="3600" step="1" inputmode="numeric">
            </label>
          </fieldset>
          <fieldset>
            <legend>重试类型</legend>
            <div class="group">
              <button type="button" data-setting="mode" data-value="auto">自动识别</button>
              <button type="button" data-setting="mode" data-value="retry">只重试失败</button>
              <button type="button" data-setting="mode" data-value="reroll">只重抽回复</button>
            </div>
            <p class="help mode-help"></p>
          </fieldset>
          <label class="compact"><span class="label">连续重试上限</span>
            <select class="limit" aria-label="连续重试上限">
              <option value="unlimited">直到成功（不限次数）</option>
            </select>
          </label>
          <div class="orb-options">
            <label class="opacity-row">悬浮球不透明度
              <input type="range" class="opacity" min="20" max="100" step="1">
              <output class="opacity-value"></output>
            </label>
            <div class="dock-row">
              <span>贴边位置</span>
              <div class="group" role="group" aria-label="贴边位置">
                <button type="button" data-setting="side" data-value="left">靠左</button>
                <button type="button" data-setting="side" data-value="right">靠右</button>
              </div>
            </div>
          </div>
          <p class="gestures">单击设置 · 双击开关 · 拖动贴边</p>
        </div>
      </section>
    `;

    shadow.innerHTML = layout;
    try {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(css);
      shadow.adoptedStyleSheets = [sheet];
    } catch {
      const fallback = document.createElement('style');
      fallback.textContent = css;
      shadow.prepend(fallback);
    }

    const get = (selector) => shadow.querySelector(selector);
    const orb = get('.orb');
    const anchor = get('.orb-anchor');
    const scrim = get('.scrim');
    const panel = get('.panel');
    const closeButton = get('.close');
    const power = get('.switch');
    const flash = get('.flash');
    const strip = get('.status');
    const statusText = get('.status-text');
    const cancel = get('.cancel');
    const seconds = get('.seconds');
    const limit = get('.limit');
    const opacity = get('.opacity');
    const opacityValue = get('.opacity-value');
    const choices = Array.from(shadow.querySelectorAll('[data-setting]'));
    const modeDescriptions = {
      auto: '按对话状态选择圆形重试或右箭头。',
      retry: '上一条发送成功、还没收到回复时重试。',
      reroll: '在最后一个版本上，用右箭头生成新回复。',
    };
    let tapTimer = 0;
    let flashTimer = 0;
    let drag = null;
    let skipClickUntil = 0;
    let viewportFrame = 0;
    let opacityPreview = null;

    for (let count = 1; count <= 10; count += 1) {
      const option = document.createElement('option');
      option.value = String(count);
      option.textContent = count + ' 次';
      limit.insertBefore(option, limit.lastElementChild);
    }

    function viewport() {
      const view = window.visualViewport;
      return {
        left: view?.offsetLeft || 0, top: view?.offsetTop || 0,
        width: view?.width || innerWidth, height: view?.height || innerHeight,
      };
    }

    function place() {
      const view = viewport();
      const bounds = {
        'view-left': view.left, 'view-top': view.top, 'view-width': view.width,
        'view-height': view.height, 'view-right': Math.max(0, innerWidth - view.width - view.left),
        'view-bottom': Math.max(0, innerHeight - view.height - view.top),
        'orb-y': view.top + 11 + Math.max(0, view.height - 68) * config.position,
      };
      for (const [key, value] of Object.entries(bounds)) host.style.setProperty('--' + key, value + 'px');
    }

    function render() {
      anchor.dataset.side = panel.dataset.side = config.side;
      orb.dataset.tone = strip.dataset.tone = currentStatus.tone;
      const displayedOpacity = opacityPreview ?? config.opacity;
      orb.style.setProperty('--orb-opacity', displayedOpacity / 100);
      power.setAttribute('aria-checked', String(config.enabled));
      if (statusText.textContent !== currentStatus.text) statusText.textContent = currentStatus.text;
      cancel.hidden = !pending;
      seconds.parentElement.hidden = config.delay !== 'custom';
      if (shadow.activeElement !== seconds) seconds.value = String(config.seconds);
      limit.value = String(config.limit);
      opacity.value = String(displayedOpacity);
      opacityValue.textContent = displayedOpacity + '%';
      get('.mode-help').textContent = modeDescriptions[config.mode];
      for (const button of choices) {
        button.setAttribute('aria-pressed', String(config[button.dataset.setting] === button.dataset.value));
      }
    }

    function close(focus = true) {
      if (panel.hidden) return;
      panel.hidden = scrim.hidden = true;
      orb.setAttribute('aria-expanded', 'false');
      if (focus && document.activeElement === host) orb.focus({ preventScroll: true });
    }

    function togglePanel(keyboard = false) {
      if (!panel.hidden) return close();
      panel.hidden = scrim.hidden = false;
      orb.setAttribute('aria-expanded', 'true');
      if (keyboard) closeButton.focus({ preventScroll: true });
    }

    function toggleEnabled() {
      changeSettings({ enabled: !config.enabled });
      clearTimeout(flashTimer);
      flash.textContent = config.enabled ? '自动重试已开启' : '自动重试已关闭';
      flash.hidden = false;
      flashTimer = setTimeout(() => { flash.hidden = true; }, 1500);
    }

    function stopTap() {
      clearTimeout(tapTimer);
      tapTimer = 0;
    }

    orb.addEventListener('click', (event) => {
      if (performance.now() < skipClickUntil) return;
      if (event.detail === 0) {
        stopTap();
        togglePanel(true);
      } else if (tapTimer) {
        stopTap();
        toggleEnabled();
      } else {
        tapTimer = setTimeout(() => {
          tapTimer = 0;
          togglePanel();
        }, DOUBLE_TAP_MS);
      }
    });

    orb.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary || event.button !== 0) return;
      const box = anchor.getBoundingClientRect();
      drag = { id: event.pointerId, x: event.clientX, y: event.clientY, left: box.left, top: box.top, moved: false };
      orb.setPointerCapture(event.pointerId);
    });
    orb.addEventListener('pointermove', (event) => {
      if (!drag || event.pointerId !== drag.id) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (!drag.moved && Math.hypot(dx, dy) < 8) return;
      drag.moved = true;
      stopTap();
      const view = viewport();
      anchor.style.right = 'auto';
      anchor.style.left = clamp(drag.left + dx, view.left + 4, view.left + view.width - 50) + 'px';
      anchor.style.top = clamp(drag.top + dy, view.top + 11, view.top + view.height - 57) + 'px';
    });

    function endDrag(event, commit) {
      if (!drag || drag.id !== event.pointerId) return;
      const moved = drag.moved;
      drag = null;
      if (!moved) return;
      skipClickUntil = performance.now() + 350;
      if (commit) {
        const view = viewport();
        const box = anchor.getBoundingClientRect();
        changeSettings({
          side: box.left + box.width / 2 < view.left + view.width / 2 ? 'left' : 'right',
          position: (box.top - view.top - 11) / Math.max(1, view.height - 68),
        });
      }
      anchor.style.removeProperty('top');
      anchor.style.removeProperty('left');
      anchor.style.removeProperty('right');
    }
    orb.addEventListener('pointerup', (event) => endDrag(event, true));
    orb.addEventListener('pointercancel', (event) => endDrag(event, false));
    orb.addEventListener('lostpointercapture', (event) => endDrag(event, false));
    orb.addEventListener('contextmenu', (event) => event.preventDefault());

    scrim.addEventListener('click', () => close(false));
    closeButton.addEventListener('click', () => close());
    power.addEventListener('click', toggleEnabled);
    cancel.addEventListener('click', () => {
      cancelPending();
      closeButton.focus({ preventScroll: true });
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !panel.hidden) {
        event.preventDefault();
        event.stopPropagation();
        close();
      }
    }, true);
    for (const button of choices) {
      button.addEventListener('click', () => changeSettings({ [button.dataset.setting]: button.dataset.value }));
    }
    seconds.addEventListener('change', () => {
      changeSettings({ seconds: range(seconds.valueAsNumber, 1, 3600, config.seconds) });
      seconds.value = String(config.seconds);
    });
    limit.addEventListener('change', () => {
      changeSettings({ limit: limit.value === UNLIMITED_RETRIES ? UNLIMITED_RETRIES : Number(limit.value) });
    });
    opacity.addEventListener('input', () => {
      opacityPreview = Number(opacity.value);
      orb.style.setProperty('--orb-opacity', opacityPreview / 100);
      opacityValue.textContent = opacity.value + '%';
    });
    opacity.addEventListener('change', () => {
      opacityPreview = null;
      changeSettings({ opacity: Number(opacity.value) });
    });

    function schedulePlace() {
      if (viewportFrame) return;
      viewportFrame = requestAnimationFrame(() => {
        viewportFrame = 0;
        place();
      });
    }
    window.addEventListener('resize', schedulePlace, { passive: true });
    window.visualViewport?.addEventListener('resize', schedulePlace, { passive: true });
    window.visualViewport?.addEventListener('scroll', schedulePlace, { passive: true });

    function drawPortrait(image) {
      for (const canvas of shadow.querySelectorAll('.portrait')) {
        canvas.getContext('2d', { alpha: true })?.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
    }
    async function loadPortrait() {
      try {
        const bytes = Uint8Array.from(atob(ICON_BASE64), (letter) => letter.charCodeAt(0));
        const bitmap = await createImageBitmap(new Blob([bytes], { type: 'image/png' }));
        drawPortrait(bitmap);
        bitmap.close();
      } catch {
        const image = new Image();
        image.onload = () => drawPortrait(image);
        image.src = 'data:image/png;base64,' + ICON_BASE64;
      }
    }
    loadPortrait();
    place();
    return { render, place, close };
  }

  idleStatus();
  syncRoute();
  observePage();
})();
