import React, { useState } from 'react';
import dayjs from 'dayjs';

const Turnero = ({ disponibilidad }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTurno, setSelectedTurno] = useState(null);

  const startOfMonth = currentMonth.startOf('month');
  const endOfMonth = currentMonth.endOf('month');
  const daysInMonth = endOfMonth.date();

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, 'month'));
    setSelectedDay(null);
    setSelectedTurno(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, 'month'));
    setSelectedDay(null);
    setSelectedTurno(null);
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setSelectedTurno(null);
  };

  const handleTurnoClick = (turno) => {
    setSelectedTurno({ hora: turno, dia: selectedDay });
  };

  const generateCalendar = () => {
    const days = [];
    const startWeekDay = startOfMonth.day(); // domingo = 0

    // Espacios vacíos antes del primer día
    for (let i = 0; i < startWeekDay; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    // Días del mes
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDay = dayjs(new Date(currentMonth.year(), currentMonth.month(), i));
      const dateStr = currentDay.format('YYYY-MM-DD');
      const turnosDelDia = disponibilidad[dateStr] || [];
      const color = turnosDelDia.length > 0 ? 'bg-green-300' : 'bg-red-300';

      days.push(
        <div
          key={dateStr}
          onClick={() => handleDayClick(dateStr)}
          className={`border p-2 text-center rounded ${color} hover:opacity-80 cursor-pointer`}
        >
          <div>{i}</div>
        </div>
      );
    }

    return days;
  };

  // Unificamos la sección de turnos seleccionados
  const renderTurnos = () => {
    if (!selectedDay) return null;
    const turnos = disponibilidad[selectedDay] || [];
    return (
      <div className="mt-4 p-4 bg-white border rounded shadow">
        <h2 className="text-lg font-semibold mb-2">
          Turnos para el {dayjs(selectedDay).format('DD/MM/YYYY')}
        </h2>
        {turnos.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {turnos.map((turno, idx) => (
              <button
                key={idx}
                onClick={() => handleTurnoClick(turno)}
                className={`px-4 py-2 rounded border ${
                  selectedTurno?.hora === turno && selectedTurno?.dia === selectedDay
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {turno}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-red-600">No hay turnos disponibles.</p>
        )}

        {selectedTurno?.dia === selectedDay && (
          <div className="mt-4 p-2 bg-blue-100 text-blue-900 rounded">
            Turno seleccionado: <strong>{selectedTurno.hora}</strong>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 rounded shadow max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-blue-600 font-bold">&lt; Anterior</button>
        <h1 className="text-xl font-bold">
          {currentMonth.format('MMMM YYYY')}
        </h1>
        <button onClick={handleNextMonth} className="text-blue-600 font-bold">Siguiente &gt;</button>
      </div>

      <div className="grid grid-cols-7 gap-2 bg-white p-4 rounded shadow">
        {/* Días de la semana */}
        {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((d) => (
          <div key={d} className="text-center font-semibold text-sm text-gray-600">
            {d}
          </div>
        ))}
        {generateCalendar()}
      </div>

      {renderTurnos()}
    </div>
  );
};

export default Turnero;
