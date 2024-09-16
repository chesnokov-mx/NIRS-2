export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-2 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About NIRS-2
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Приветствуем вас на странице NIRS!
              Это веб-приложение было создано в рамках научно-исследовательской работы студента Чеснокова Максима.
              Целью проекта было разработать решение для динамического управления доступом на основе ролевой модели,
              которое демонстрирует возможности современных веб-технологий и подходов к управлению правами пользователей.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
